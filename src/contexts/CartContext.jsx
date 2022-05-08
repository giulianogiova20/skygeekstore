import React, { createContext, useState, useEffect } from 'react'
import swal from 'sweetalert'

export const context = createContext()
const { Provider } = context

const CustomProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)

    

    const addItem = (itemDetail, itemQuantity) => {


        if (isInCart(itemDetail)) {
                const cartItemsMF = cartItems.map((cartItem)=>{
                    if (cartItem.id === itemDetail.id) //Encuentra el item que ya estaba en el carrito
                    { if (cartItem.stock>=itemQuantity) //Verifica que la cantidad que quiere agregar no supere el stock disponible
                        {
                            const cartItemMF = {
                                name: cartItem.name,
                                price: cartItem.price,
                                id: cartItem.id,
                                img: cartItem.img,
                                qty: cartItem.qty + itemQuantity,
                                stock: cartItem.stock - itemQuantity
                                }
                                setCartQuantity(cartQuantity + cartItemMF.qty)
                                return cartItemMF //Devuelve el item con la cantidad modificada
                                
                        } else {
                            swal({
                                title: 'Can´t exceed the available stock',
                                icon: 'warning'
                            })
                            const cartItemMF = {
                                name: cartItem.name,
                                price: cartItem.price,
                                id: cartItem.id,
                                img: cartItem.img,
                                qty: cartItem.qty,
                                stock: cartItem.stock
                                }
                                return cartItemMF //Devuelve el item con la cantidad modificada
                        }
                    }
                    else {return cartItem} //Devuelve el item sin modificar
                } 
                )   
            setCartItems(cartItemsMF)
           
        } else {
            
            const newCartItem =
            {
                name: itemDetail.name,
                price: itemDetail.price,
                id: itemDetail.id,
                img: itemDetail.img,
                qty: itemQuantity,
                stock: itemDetail.stock - itemQuantity
            }
            setCartItems([...cartItems, newCartItem])
            setCartQuantity(cartQuantity + itemQuantity)
        }
    }

    const isInCart = (itemDetail) => {
        return cartItems.some((element) => element.id === itemDetail.id)
    }

    const totalCost = () => {
        return cartItems.reduce((total, item) => total = total + (item.price * item.qty), 0)
    }

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(
            (element) => element.id !== id)
        setCartItems(updatedCart)           
    }

    const clear = () => {
        setCartItems([])
    }

    useEffect(() => {
        if (cartItems.length > 0){
            let quantity = 0
            cartItems.forEach(item => quantity = quantity + item.qty)
            setCartQuantity(quantity) //Modifica la cantidad total de items en carrito
        } else {
            setCartQuantity(0)
        }
      }, [cartItems])

    return (
        <Provider value={{ cartItems, cartQuantity, addItem, removeItem, clear, totalCost}}>
            {children}
        </Provider>
    )
}

export default CustomProvider
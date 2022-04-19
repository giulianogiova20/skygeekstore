import React, { createContext, useState, useEffect } from 'react'

export const context = createContext()
const { Provider } = context

const CustomProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    

    const addItem = (itemDetail, itemQuantity) => {


        if (isInCart(itemDetail)) {
            const itemAdded = cartItems.find((element) => element.id === itemDetail.id)
            itemAdded.qty = itemAdded.qty + itemQuantity 
            setCartQuantity(cartQuantity + itemQuantity)
           
        } else {
            
            const newCartItem =
            {
                name: itemDetail.name,
                price: itemDetail.price,
                id: itemDetail.id,
                img: itemDetail.img,
                qty: itemQuantity
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
            setCartQuantity(quantity)
        } else {
            setCartQuantity(0)
        }
      }, [cartItems])

    return (
        <Provider value={{ cartItems, cartQuantity, addItem, removeItem, clear, totalCost }}>
            {children}
        </Provider>
    )
}

export default CustomProvider
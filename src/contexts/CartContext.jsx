import React, { createContext, useState } from 'react'

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
            console.log(`Now you have ${itemAdded.qty} items of "${itemAdded.name}" in cart`)
        } else {
            console.log(`You have ${itemQuantity} items of "${itemDetail.name}" in cart`)
            const newCartItem =
            {
                name: itemDetail.name,
                price: itemDetail.price,
                id: itemDetail.id,
                img: itemDetail.img,
                qty: itemQuantity
            }
            setCartItems([...cartItems, newCartItem])
        }
    }

    const isInCart = (itemDetail) => {
        return cartItems.some((element) => element.id === itemDetail.id)
    }

    const removeItem = (itemDetail) => {
        const updatedCart = cartItems.filter(
            (element) => element.id !== itemDetail.id)
        setCartItems(updatedCart)
        console.log(`Item "${itemDetail.name}" Deleted from Cart`)   
    }

    const clear = () => {
        setCartItems([])
    }

    console.log("Cart is:")
    console.log(cartItems)

    return (
        <Provider value={{ cartItems, addItem, removeItem, clear }}>
            {children}
        </Provider>
    )
}

export default CustomProvider
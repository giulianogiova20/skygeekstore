import React from "react";
import { IoCartOutline } from "react-icons/io5"
import { Badge} from 'react-bootstrap'

const CartWidget = ({cartQuantity}) => {
    return (
        <>
        <IoCartOutline/>
        { cartQuantity !== 0 ? (<Badge pill bg="dark">{cartQuantity}</Badge>) : null }
        </>
    )
}

export default CartWidget
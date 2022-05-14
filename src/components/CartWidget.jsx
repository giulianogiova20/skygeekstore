import React from "react";
import { IoCartOutline } from "react-icons/io5"
import { Badge} from 'react-bootstrap'

const CartWidget = ({cartQuantity}) => {
    return (
        <>
        <IoCartOutline size={35}/>
        { cartQuantity !== 0 ? (<Badge pill bg="info">{cartQuantity}</Badge>) : null }
        </>
    )
}

export default CartWidget
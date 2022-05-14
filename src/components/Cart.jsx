import React, { useContext, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { context } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import "../css/cart.css"
import {MdRemoveShoppingCart} from "react-icons/md"
import {IoBagHandle} from "react-icons/io5"
import {collection, addDoc, serverTimestamp, updateDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"

const Cart = () => {

    const { cartItems, removeItem, totalCost, clear } = useContext(context)

    const deleteItem = (id) => {
       removeItem(id) 
    }

    const [BuyerInfo, setBuyerInfo ] = useState({
        buyerName: "",
        buyerLastName: "",
        buyerEmail: "",
        buyerPhone: ""
    })

    const formHandler = ((e) =>{
        e.preventDefault()
        setBuyerInfo({
            ...BuyerInfo,
            [e.target.name]: e.target.value
        })
    }  
    )


    const confirmCheckout = (e) => {
        e.preventDefault()
        const order = {
            buyer: {...BuyerInfo},
            items: cartItems,
            date: serverTimestamp(),
            total: totalCost(),
        }

        const userOrder = collection(db,"OrderCollection")
        addDoc(userOrder,order)
        .then( result => {
            swal({
                title: 'Purchase done!',
                text: `
                Your Order ID: ${result.id}\n
                Total: $${totalCost()}`,
                icon: 'success'
                })
        } 
        )
        .then(
                cartItems.forEach( element => {
                    const PurchasedQuantity = element.qty
                    const updateCollection = doc(db,"ItemCollection", `${element.id}`)
                    getDoc(updateCollection)
                    .then( result => {
                        const updatedStock = result.data().stock - PurchasedQuantity
                        updateDoc(updateCollection, {"stock": updatedStock})
                    }
                    )
                }                  
            )
        )
        
        clear()
    }

    
    if (cartItems.length === 0) {
        return (
                <Container>
                    <Row className="d-flex justify-content-center align-items-center mt-4">
                        <Col xs={10} className="d-flex justify-content-center">
                            <h1 className="text-magenta">NO ITEMS IN CART</h1>
                        </Col>
                        <Link to={`/`} className="d-flex justify-content-center">
                            <button className="mt-3 box-button text-cyan"><h2><IoBagHandle size={20}/> Go shopping</h2></button>
                        </Link>
                    </Row>
                </Container>
        )
    } else {
        return (
                <Container>
                    <Row className="mb-3 justify-content-center">
                        <Col lg={6} sm={3} className="d-flex justify-content-center">
                            <h1 className="text-light border-bottom">CART</h1>
                        </Col>
                    </Row>
                    <Row className="cart-items d-flex justify-content-center">
                        <Col md={8}>
                            {
                                cartItems.map((cartItem) => (
                                    <Row key={cartItem.id} className="cart-item my-3">
                                        <Col md={2} xs={6}>
                                            <button className="box-button--cart" onClick={ ()=> deleteItem(cartItem.id) }><MdRemoveShoppingCart size={20}/></button>
                                        </Col>
                                        <Col md={2} xs={6} className="d-flex justify-content-end justify-content-md-center">
                                        <img src={cartItem.img} className="cart-item--img" alt="" />
                                        </Col>
                                        <Col md={8} xs={12} className="d-flex align-items-center">
                                                <Col md={9} xs={10}><h4>{cartItem.qty}x {cartItem.name}</h4></Col>
                                                <Col md={3} xs={2} className="d-flex justify-content-end">
                                                    <h4>$ {cartItem.price}</h4>
                                                </Col>
                                        </Col>
                                    </Row>
                                ))
                            }
                        </Col>
                        
                    </Row>
                    <Row className="d-flex justify-content-center my-4">
                        <Col md={4} xs={6} className="d-flex align-items-center justify-content-start"><button className="cart-item--remove box-button--cart" onClick={ ()=> clear() }><MdRemoveShoppingCart size={20}/> Clear all items</button> </Col>
                        <Col md={4} xs={6} className="cart-items d-flex justify-content-end">
                            <h3 className="text-magenta">Total cost: $ {totalCost()}</h3>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="m-3 justify-content-center">
                        <Col lg={6} sm={3} className="d-flex justify-content-center">
                            <h1 className="text-light border-bottom">CHECKOUT</h1>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center my-5"> 
                        <Col md={6} xs={10}>
                            <h2 className="text-light">Enter your information:</h2>
                            <form onSubmit={confirmCheckout}>
                                <input className="form-control" value={BuyerInfo.buyerName} onChange={formHandler} required type="text" name="buyerName" placeholder="Name"></input>
                                <input className="form-control" value={BuyerInfo.buyerLastName} onChange={formHandler} required type="text" name="buyerLastName" placeholder="LastName"></input>
                                <input className="form-control" value={BuyerInfo.buyerEmail} onChange={formHandler} required type="email" name="buyerEmail" placeholder="email"></input>
                                <input className="form-control" value={BuyerInfo.buyerPhone} onChange={formHandler} type="number" name="buyerPhone" placeholder="Phone number"></input>
                                <Col className="d-flex justify-content-center my-4">
                                    <button type="submit" className="box-button ">
                                    <h3 className="text-cyan"><IoBagHandle size={20}/> Checkout</h3></button>
                                </Col>
                            </form>
                        </Col>
                    </Row>
                </Container>
        )
    }

}

export default Cart
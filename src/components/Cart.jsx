import React, { useContext, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { context } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import "../css/cart.css"
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
        buyerEmail: ""
    })

    const formHandler = ((e) =>{
        setBuyerInfo({
            ...BuyerInfo,
            [e.target.name]: e.target.value
        })
    }  
    )


    const confirmCheckout = () => {
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
                        console.log(updatedStock)
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
                        <Link to={`/`} className="d-flex justify-content-center"><button className="mt-3 box-button text-cyan"><h2>Go shopping</h2></button></Link>
                    </Row>
                </Container>
        )
    } else {
        return (
                <Container>
                    <Row className="mb-3 justify-content-center">
                        <Col lg={6} sm={3} className="d-flex justify-content-center">
                            <h1 className="text-light">CART</h1>
                        </Col>
                    </Row>
                    <Row className="cart-items d-flex justify-content-center">
                        
                        <Col md={8}>
                            {
                                cartItems.map((cartItem) => (
                                    <Row key={cartItem.id} className="cart-item my-3">
                                        <Col md={1} xs={6}>
                                            <button className="box-button--cart" onClick={ ()=> deleteItem(cartItem.id) }>X</button>
                                        </Col>
                                        <Col md={3} xs={6} className="d-flex justify-content-end justify-content-md-center">
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
                        <Col md={4} xs={6} className="d-flex align-items-center justify-content-start"><button className="cart-item--remove box-button--cart" onClick={ ()=> clear() }>Clear all items</button> </Col>
                        <Col md={4} xs={6} className="cart-items d-flex justify-content-end">
                            <h3 className="text-magenta">Total cost: $ {totalCost()}</h3>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="m-3 justify-content-center">
                        <Col lg={6} sm={3} className="d-flex justify-content-center">
                            <h1 className="text-light">CHECKOUT</h1>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center my-4">                        
                        <Col md={5} xs={10}className="d-flex flex-column justify-content-center">
                            <h2 className="text-light">Enter your information:</h2>
                            <form>
                                <h2><input className="form-control" value={BuyerInfo.buyerName} onChange={formHandler} required type="text" name="buyerName" placeholder="Name"></input></h2>
                                <h2><input className="form-control" value={BuyerInfo.buyerLastName} onChange={formHandler} type="text" name="buyerLastName" placeholder="LastName"></input></h2>
                                <h2><input className="form-control" value={BuyerInfo.buyerEmail} onChange={formHandler} type="email" name="buyerEmail" placeholder="email"></input></h2>
                            </form>
                        </Col>
                        <Col md={4} xs={8} className="d-flex justify-content-center align-items-center mt-2 mt-md-0"><button className="box-button" onClick={confirmCheckout}>
                            <h3 className="text-cyan">Checkout</h3></button>
                        </Col>
                    </Row>
                </Container>
        )
    }

}

export default Cart
import React, { useContext } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { context } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "../css/cart.css"

const Cart = () => {

    const { cartItems, removeItem, totalCost } = useContext(context)

    const deleteItem = (id) => {
       removeItem(id) 
    }

    if (cartItems.length === 0) {
        return (
            <Container>
                <Col className="d-flex justify-content-center">
                    <Row className="d-flex justify-content-center">

                        <h1 className="text-magenta">NO ITEMS IN CART</h1>
                        <Link to={`/`}><button className="card-detail-buy mt-3 text-info"><h2>Go shopping</h2></button></Link>

                    </Row>
                </Col>
            </Container>
        )
    } else {
        return (
                <Container>
                    <Row className="mb-3 justify-content-center">
                        <Col lg={6} sm={3} className="d-flex justify-content-center">
                            <h1 className="text-magenta">CART</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={8} xs={10} className="cart-items">
                        {
                            cartItems.map((cartItem) => (
                                <Row key={cartItem.id} className="cart-item my-2 mx-2">
                                    <Col md={1} xs={3} className="text-magenta justify-content-center">
                                        <button className="card-detail-buy mt-3 text-danger" onClick={ ()=> deleteItem(cartItem.id) }>X</button>
                                    </Col>
                                    <Col md={3} xs={5} className="d-flex justify-content-center">
                                    <img src={cartItem.img} className="cart-item--img" alt="" />
                                    </Col>
                                    <Col md={8} xs={12} className="d-flex align-items-center text-info">
                                            <Col md={9} xs={10}><h4>{cartItem.qty}x {cartItem.name}</h4></Col>
                                            <Col md={3} xs={2}>
                                                <h4>$ {cartItem.price}</h4>
                                            </Col>
                                    </Col>
                                </Row>
                            ))
                        }
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} xs={6}></Col>
                        <Col md={2} xs={4} className="cart-items d-flex justify-content-center ">
                            <h3 className="text-magenta">Total: $ {totalCost()}</h3>
                        </Col>
                    </Row>
                </Container>
        )
    }

}

export default Cart
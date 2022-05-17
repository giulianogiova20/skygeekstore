import React, { useState , useContext} from "react";
import { context } from "../contexts/CartContext";
import ItemCount from "../components/ItemCount"
import swal from 'sweetalert';
import "../css/carddetail.css"
import { Link } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'
import {IoBagRemove, IoBagHandle} from "react-icons/io5"



const ItemDetail = ({itemDetail}) => {

    const [CartHandler, setCartHandler] = useState(false)
    const { addItem, removeItem } = useContext(context)

    const onAdd = (counterItem) =>{
        setCartHandler(true) 
        swal({
        text: 'Added to Cart',
        icon: 'success',
        })
        addItem(itemDetail, counterItem) 
    }


    const deleteItem = () => {
        removeItem(itemDetail.id) 
        setCartHandler(false) 
    }

    return (
        <>            
            <Container className="wrapper d-flex justify-content-center mt-4">
                <Row className="outer d-flex align-items-center p-3 mb-5">
                    <Col md={6} xs={12} className="d-flex justify-content-center">
                        <img src={itemDetail.img} className="card-detail-img" alt="Palpatine Figure" />
                    </Col> 
                    <Col md={6} xs={12} className="flex-column d-flex align-items-center justify-content-center card-detail-content">
                        <h1 className="card-detail-h1">{itemDetail.name}</h1>
                        <Row>
                            <Col md={6} xs={12} className="d-flex flex-column">
                                <span className="card-detail-p my-2 text-center">STOCK: {itemDetail.stock}</span>
                                <span className="card-detail-p my-2 text-center">PRICE: ${itemDetail.price}</span>
                            </Col>
                            <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                                <span className="free-sheeping my-1 d-flex align-items-center text-center">FREE SHIPPING WEEK</span>
                            </Col>
                        </Row>
                        
                        <p className="card-detail-p my-4">{itemDetail.description}</p>
                        { 
                        CartHandler ? 
                        (<>
                        <ItemCount stock={itemDetail.stock} price={itemDetail.price} onAdd={onAdd}/>
                        <Row>
                            <Col md={7} xs={12} className="d-flex justify-content-center mt-3"><button className="box-button" onClick={deleteItem}><IoBagRemove size={20}/>DELETE FROM CART</button></Col>
                            <Col md={5} xs={12} className="d-flex justify-content-center my-3">
                                <Link to={`/cart`}><button className="box-button"><IoBagHandle size={20}/> CHECKOUT</button></Link>
                            </Col>
                        </Row>
                        </>
                        ) 
                            : (<ItemCount stock={itemDetail.stock} price={itemDetail.price} onAdd={onAdd}/>) 
                        }
                    </Col>
                </Row>
            </Container>             
        </>
    )

}

export default ItemDetail
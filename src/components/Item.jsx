import React from "react";
import { Row, Col, Card} from 'react-bootstrap'
import "../css/cards.css"
import { Link } from "react-router-dom";
import {IoArrowRedoCircleSharp} from "react-icons/io5"
import {AiOutlineDollarCircle} from "react-icons/ai"

const Item = ({item}) => {


    return (
        <>
            <Card style={{ width: '18rem' }}  className="item--card flex-column">
            <Card.Img variant="top" src={item.img} alt=""/>
            <Card.Body>
                <Row className='d-flex justify-content-center text-light fs-4 py-2'>{item.name}</Row>
                <Row className='d-flex justify-content-center text-light'>
                    <Col className='d-flex justify-content-center'>
                            <button disabled className="m-2  box-button btn-animation"><AiOutlineDollarCircle size={20}/> {item.price}</button>
                            <Link key={item.id} to={`/item/${item.id}`}><button className="m-2  box-button btn-animation"><IoArrowRedoCircleSharp size={20}/>Details</button></Link>               
                    </Col>
                </Row>
            </Card.Body>
            </Card> 
        </>
    )

}

export default Item
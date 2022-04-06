import React from "react";
import { Row, Col, Card} from 'react-bootstrap'
import "../css/cards.css"
import { Link } from "react-router-dom";

const Item = ({item}) => {


    return (
        <>
            <Card style={{ width: '18rem' }} border="info" className="item--card flex-column">
            <Card.Img variant="top" src={item.img} alt=""/>
            <Card.Body>
                <Row className='d-flex justify-content-center text-light'>{item.name}</Row>
                <Row className='d-flex justify-content-center text-light'>
                    <Col className='d-flex justify-content-center card-button'>
                        <button disabled>$ {item.price}</button>
                        <Link key={item.id} to={`/item/${item.id}`}><button>Details</button></Link>                       
                    </Col>
                </Row>
            </Card.Body>
            </Card> 
        </>
    )

}

export default Item
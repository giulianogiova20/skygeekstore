import React, { useState } from 'react';
import swal from 'sweetalert';
import {Row, Col, Container} from "react-bootstrap"


const ItemCount = ({stock,price,onAdd}) =>{

    const [counterItem, setCounterItem] = useState(1);
       

    const itemAdd = () => {
            if(stock === 0){
            swal({
                title: 'No stock',
                icon: 'error'
            });
            setCounterItem(0);
        }else{
            if(counterItem < stock){
                setCounterItem(counterItem + 1);
            }else{
                swal({
                    title: 'Can´t exceed the available stock',
                    icon: 'warning'
                });
            }
        }
    }

    const itemRemove = () => {
        if(stock === 0){
        swal({
            title: 'No stock',
            icon: 'error'
        });
        setCounterItem(0);
        }else{
        if(counterItem > 1){
            setCounterItem(counterItem - 1);
        }else{
                swal({
                    text: 'Can´t add less than 1 product',
                    icon: 'info'
                });
            }
        }
    } 

    const onAddCart = () => {
        if (counterItem > 0) {
            onAdd(counterItem)
        }
    }


    return (
            <>
            {
                stock > 0
            ?
            <>  
                <Container>
                    <Row className='card-detail-button d-flex justify-content-center'>
                        <Col xs={12} className="d-flex justify-content-center">
                            <button className='box-button' onClick={onAddCart}>ADD TO CART</button>
                        </Col>
                        <Col xs={12} className="d-flex justify-content-center mt-2">
                            <button className='box-button' onClick={itemRemove}>-</button>
                            <button className='box-button'>{counterItem}</button>
                            <button className='box-button' onClick={itemAdd}>+</button>
                        </Col>
                    </Row>
                </Container>
            </>
            :
            <div>
                <span className='text-magenta'>No stock</span>
            </div>
            }         
            </>

    )
}

export default ItemCount;

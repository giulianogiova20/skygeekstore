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
                    <Row className='card-detail-button'>
                        <Col md={12} xs={6}>
                            <button>${price}</button>
                            <button onClick={onAddCart}>ADD TO CART</button>
                            <button onClick={itemRemove}>-</button>
                            <button>{counterItem}</button>
                            <button onClick={itemAdd}>+</button>
                        </Col>
                    </Row>
                </Container>
            </>
            :
            <div>
                <span>No stock</span>
            </div>
            }         
            </>

    )
}

export default ItemCount;

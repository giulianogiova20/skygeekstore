import { useState } from 'react';
import swal from 'sweetalert';
import {Card, Button} from 'react-bootstrap'


const ItemCount = (props) =>{

    const [counterItem, setCounterItem] = useState(1);
    const itemStock = props.stock;

    const itemAdd = () => {
            if(itemStock === 0){
            swal({
                title: 'No hay stock disponible',
                icon: 'error'
            });
            setCounterItem(0);
        }else{
            if(counterItem < itemStock){
                setCounterItem(counterItem + 1);
            }else{
                swal({
                    title: 'No puedes superar el stock disponible',
                    icon: 'warning'
                });
            }
        }
    }

    const itemRemove = () => {
        if(itemStock === 0){
        swal({
            title: 'No hay stock disponible',
            icon: 'error'
        });
        setCounterItem(0);
        }else{
        if(counterItem > 1){
            setCounterItem(counterItem - 1);
        }else{
                swal({
                    text: 'No puede añadir menos de 1 producto',
                    icon: 'info'
                });
            }
        }
    } 

    const onAddCart = () =>{
        swal({
            text: 'Producto añadido al carrito',
            icon: 'success'
        })
        console.log(`User added ${counterItem}`)
    }

    const Reset = () =>{
        setCounterItem(1)
    }

    return (
            <>
            <Card style={{ width: '18rem' }} border="info" className="item--card">
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51v6Rc2aLcL._SX500_SY500_CR,0,0,500,500_.jpg" alt="Baby Yoda Figure" />
            <Card.Body>
                <Card.Title className='d-flex justify-content-center text-info'>Baby Yoda Figure</Card.Title>
                <Card.Text>
                            <div className='d-flex justify-content-center'>
                                <div className='flex-column justify-content-center'>
                                    <div>
                                        <span>Price: $98</span>
                                    </div>
                                    <div>
                                        <span>Stock: {props.stock}</span>
                                    </div>
                                </div>
                            </div>
                            {
                                props.stock > 0
                            ?
                            <>  
                                <div className='d-flex justify-content-evenly'>
                                    <Button variant='outline-info' onClick={itemRemove}>-</Button>
                                    {counterItem}
                                    <Button variant="outline-info" onClick={itemAdd}>+</Button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Button variant="outline-info" style={{ width: '65%' }} onClick={onAddCart}>Add To Cart</Button>                    
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Button variant="outline-info" style={{ width: '65%' }} onClick={Reset}>Reset</Button>                    
                                </div>
                            </>
                            :
                            <div>
                                <span>No stock</span>
                            </div>
                            }
                </Card.Text>
            </Card.Body>
            </Card>          
            </>

    )
}

export default ItemCount;

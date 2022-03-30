import { useState } from 'react';
import swal from 'sweetalert';
import {Button} from 'react-bootstrap'


const ItemCount = ({stock,onAdd}) =>{

    const [counterItem, setCounterItem] = useState(1);
       

    const itemAdd = () => {
            if(stock === 0){
            swal({
                title: 'No hay stock disponible',
                icon: 'error'
            });
            setCounterItem(0);
        }else{
            if(counterItem < stock){
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
        if(stock === 0){
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

    const onAddCart = () => {
        if (counterItem > 0) {
            onAdd(counterItem)
        }
    }

    const Reset = () =>{
        setCounterItem(1)
    }

    return (
            <>
            {
                stock > 0
            ?
            <>  
                <div className='d-flex justify-content-evenly text-magenta'>
                    <Button variant='outline-info color-magenta' onClick={itemRemove}>-</Button>
                    {counterItem}
                    <Button variant="outline-info color-magenta" onClick={itemAdd}>+</Button>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button variant="outline-info color-magenta" style={{ width: '65%' }} onClick={onAddCart}>Add To Cart</Button>                    
                </div>
                <div className='d-flex justify-content-center'>
                    <Button variant="outline-info color-magenta" style={{ width: '65%' }} onClick={Reset}>Reset</Button>                    
                </div>
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

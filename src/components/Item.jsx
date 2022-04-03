import {Card, Button} from 'react-bootstrap';
import ItemCount from './ItemCount';
import swal from 'sweetalert';

const Item = ({item}) => {

/*     const onAdd = (counterItem) =>{
        swal({
            text: 'Added to Cart',
            icon: 'success'
        })
        console.log(`User added ${counterItem} items`)
    } */

    return (
        <>
            <Card style={{ width: '18rem' }} border="info" className="item--card">
            <Card.Img variant="top" src={item.img} alt=""/>
            <Card.Body>
                <Card.Title className='d-flex justify-content-center text-light'>{item.name}</Card.Title>
                <Card.Text>
                        <div className='d-flex justify-content-center text-light'>
                            <div className='flex-column justify-content-center'>
                                <div className="card-detail-button">
                                <a className="card-detail-button" href="#"><i className="card-detail-cart-icon ion-bag"></i>$ {item.price}</a><a className="card-detail-button" href="#"><i className="card-detail-cart-icon ion-bag"></i>Details</a> 
                                </div>                              
                            </div>
                        </div>
                </Card.Text>
                {/* <ItemCount stock={item.stock} onAdd={onAdd}/> */}
            </Card.Body>
            </Card> 
        </>
    )

}

export default Item
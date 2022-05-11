import React, { useState , useContext} from "react";
import ItemCount from "../components/ItemCount"
import swal from 'sweetalert';
import "../css/carddetail.css"
import { context } from "../contexts/CartContext";
import { Link } from "react-router-dom"



const ItemDetail = ({itemDetail}) => {

    const [CartHandler, setCartHandler] = useState(false)
    const { addItem, removeItem } = useContext(context)

    const onAdd = (counterItem) =>{
        setCartHandler(true) 
        swal({
        text: 'Added to Cart',
        icon: 'success'
        })
        addItem(itemDetail, counterItem) 
    }


    const deleteItem = () => {
        removeItem(itemDetail.id) 
        setCartHandler(false) 
    }

    return (
        <>            
            <div className="wrapper d-flex justify-content-center mt-4">
                <div className="outer">
                    <div className="card-detail-content animated fadeInLeft">
                        <h1 className="card-detail-h1">{itemDetail.name}</h1>
                        <span className="bg animated fadeInDown card-detail-p">stock: {itemDetail.stock}</span>
                        <p className="card-detail-p">{itemDetail.description}</p>
                        { 
                        CartHandler ? 
                        (<>
                        <ItemCount stock={itemDetail.stock} price={itemDetail.price} onAdd={onAdd}/>
                        <Link to={`/cart`}><button className="card-detail-buy">CHECKOUT</button></Link>
                        <button className="card-detail-buy mt-3" onClick={deleteItem}>DELETE FROM CART</button>
                        </>
                        ) 
                            : (<ItemCount stock={itemDetail.stock} price={itemDetail.price} onAdd={onAdd}/>) 
                        }
                    </div>
                    <img src={itemDetail.img} className="card-detail-img" alt="Palpatine Figure" /> 
                </div>
            </div>             
        </>
    )

}

export default ItemDetail
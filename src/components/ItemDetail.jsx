import React, { useState } from "react";
import ItemCount from "./ItemCount"
import swal from 'sweetalert';
import "../css/carddetail.css"
import { Link } from "react-router-dom";



const ItemDetail = ({itemDetail}) => {

    const [buy, setBuy] = useState(false)

    const onAdd = (counterItem) =>{
        setBuy(true)
        swal({
        text: 'Added to Cart',
        icon: 'success'
        })
        console.log(`User added ${counterItem} items`)
    }

    return (
            <>
            {
            buy ? (
                <div className="wrapper d-flex justify-content-center mt-4">
                    <div className="outer ">
                        <div className="card-detail-content animated fadeInLeft">
                            <h1 className="card-detail-h1">{itemDetail.name}</h1>
                            <Link to="/cart"><button className="card-detail-buy">BUY</button></Link>
                        </div>
                        <img src={itemDetail.img} className="card-detail-img" alt="Palpatine Figure" /> 
                    </div>
                </div>
            ) : (
                <div className="wrapper d-flex justify-content-center mt-4">
                    <div className="outer">
                        <div className="card-detail-content animated fadeInLeft">
                        <h1 className="card-detail-h1">{itemDetail.name}</h1>
                        <span className="bg animated fadeInDown card-detail-p">stock: {itemDetail.stock}</span>
                        <p className="card-detail-p">{itemDetail.description}</p>
                        <ItemCount stock={itemDetail.stock} price={itemDetail.price} onAdd={onAdd}/>
                        </div>
                        <img src={itemDetail.img} className="card-detail-img" alt="Palpatine Figure" /> 
                    </div>
                </div>  
            )
            
            }            
            </>

    )

}

export default ItemDetail
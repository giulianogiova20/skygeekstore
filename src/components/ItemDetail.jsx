import ItemCount from "./ItemCount"
import swal from 'sweetalert';
import "../carddetail.css"

const onAdd = (counterItem) =>{
    swal({
        text: 'Added to Cart',
        icon: 'success'
    })
    console.log(`User added ${counterItem} items`)
}

const ItemDetail = ({itemDetail}) => {

    return (
            <>
            <div className="wrapper d-flex justify-content-start">
                <div className="outer">
                    <div className="card-detail-content animated fadeInLeft">
                    <h1 className="card-detail-h1">{itemDetail.name}</h1>
                    <span className="bg animated fadeInDown">stock: {itemDetail.stock}</span>
                    <p className="card-detail-p">{itemDetail.description}</p>
                    
                    <ItemCount stock={itemDetail.stock} price={itemDetail.price} onAdd={onAdd}/>
                    
                    </div>
                    <img src={itemDetail.img} className="card-detail-img" alt="Palpatine Figure" /> 
                </div>
            </div>
            
            </>

    )

}

export default ItemDetail
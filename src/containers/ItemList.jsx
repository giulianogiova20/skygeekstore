import React from "react";
import Item from '../components/Item'
import Loader from '../components/Loader'


const ItemList = ({products}) => { 

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {
                products.length > 0 ?
                    products.map((card) => (
                        <Item item={card} key={card.id}/>  
                    )) : (
                        <Loader />
                    )
            }
        </div>
    )
}

export default ItemList
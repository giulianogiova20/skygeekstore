import React from "react";
import Item from './Item'
import Loader from './Loader'


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
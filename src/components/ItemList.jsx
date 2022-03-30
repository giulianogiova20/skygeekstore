import Item from './Item'
import Loader from './Loader'


const ItemList = ({productos}) => { 

    return (
        <div className="item--render">
            {
                productos.length > 0 ?
                    productos.map((card) => (
                        <div key={card.id}>
                            <Item item={card}/>
                        </div>
                    )) : (
                        <Loader />
                    )
            }
        </div>
    )
}

export default ItemList
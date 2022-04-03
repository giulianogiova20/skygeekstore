import { useEffect, useState } from "react";
import ItemList from "./ItemList";


const InitialProducts = [
    {
        name: "The Mandalorian Figure",
        price: 14,
        stock: 7,
        id: 1,
        img: "https://m.media-amazon.com/images/I/71ylTgu1ysL._AC_SX569_.jpg",
    },
    {
        name: "Palpatine Figure",
        price: 20,
        stock: 2,
        id: 2,
        img: "https://m.media-amazon.com/images/I/61XAmUM3l0L._AC_SX569_.jpg",
    },
    {
        name: "Stormtrooper Figure",
        price: 12,
        stock: 15,
        id: 3,
        img: "https://m.media-amazon.com/images/I/71X5snD3GAL._AC_SX569_.jpg",
    },
]



const ItemListContainer = ({ greeting, userName }) => {

    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
          res(InitialProducts);
        }, 2000);
      })

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        promesa.then((products) => {
            setProducts(products)
        }).catch(() => {
            console.log("Something went wrong")
        })
    }, [])
    

    return (
        <>
            <div className='body--style'>
                <h2>Welcome, {userName}!</h2>
                <h3>{greeting}</h3>
                <ItemList productos= {products}/>
            </div>
        </>
    )
}

export default ItemListContainer
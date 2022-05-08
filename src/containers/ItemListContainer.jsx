import React, { useEffect, useState} from "react";
import ItemList from "../containers/ItemList";
import Loader from "../components/Loader"
import { Container } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = ({ greeting, userName }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { category } = useParams()

    const getItems = async () => {

        const productsCollection = collection(db, "ItemCollection")

        if (category){
            try {
                const products = query(productsCollection, where("category", "==", `${category}`))
                getDocs(products)
                .then((result)=> {
                    const docs = result.docs
                    if (docs.length>0) {
                        const lista = docs.map( producto => {
                            const id = producto.id
                            const product = {
                                id,
                                ...producto.data()
                            }
                            return product
                        })
                        setProducts(lista)
                    } 
                    else { console.log("No products")}
            })
            } 
            catch {
                setError(true)
            } 
            finally {
                setTimeout(() => {
                    setLoading(false)
                  }, 1000)
            }
        }

        else {
            try {
                getDocs(productsCollection)
                .then((result)=> {
                    const docs = result.docs
                    if (docs.length>0) {
                        const lista = docs.map( producto => {
                            const id = producto.id
                            const product = {
                                id,
                                ...producto.data()
                            }
                            return product
                        })
                        setProducts(lista)
                    } 
                    else { console.log("No products")}
          
            })
            } 
            catch {
                setError(true)
            } 
            finally {
                setTimeout(() => {
                    setLoading(false)
                  }, 1000)
            }
        }


         
    }

    useEffect(() => {
        getItems()
    }, [category])
    

    return (
        <>
            <Container className="body--style">
                <h2>Welcome, {userName}!</h2>
                <h3>{greeting}</h3>
            </Container>
            <Container>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        error ? (
                            <h1>We're sorry, something went wrong...</h1>
                        ) : (
                            <ItemList products={products} />
                        )
                    )
                }
            </Container>
        </>
    )
}

export default ItemListContainer
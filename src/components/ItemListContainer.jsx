import React, { useEffect, useState} from "react";
import ItemList from "./ItemList";
import Loader from "./Loader"
import { Container } from 'react-bootstrap'
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting, userName }) => {


    const apiUrl = "https://mocki.io/v1/a4191af6-4e16-498e-9191-eb1aab274ca9"
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { category } = useParams()

    const getItems = async () => {
        try {
            const response = await fetch(apiUrl)
            const products = await response.json()

            if (category) {
                const filterProducts = products.filter(
                    (element) => element.category === category
                )
                setProducts(filterProducts)
            } else {
                setProducts(products)
            }
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
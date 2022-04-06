import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Loader from './Loader'
import { Container } from 'react-bootstrap'
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const apiUrl = "https://mocki.io/v1/a4191af6-4e16-498e-9191-eb1aab274ca9"
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { id } = useParams()

    const getItems = async () => {
        try {
            const response = await fetch(apiUrl)
            const product = await response.json()

            if (id) {
                const filterProduct = product.filter(
                    (element) => element.id.toString() === id
                )
                setProducts(filterProduct)
            } else {
                console.log("none selected")
            }
        }
        catch {
            setError(true)
        }
        finally {
            setTimeout(() => {
                setLoading(false)
              }, 700)
        }
    }

    useEffect(() => {
        getItems()
    }, [id])
  
  return (
      <>
          <Container>
            {
                loading ? (
                    <Loader />
                ) : (
                    error ? (
                        <h1>We're sorry, something went wrong...</h1>
                    ) : (
                        product.length > 0 ?
                         product.map((itemDetail) => (
                            <ItemDetail itemDetail={itemDetail} key={itemDetail.id} />
                             )) : console.log("not found")
                        )       
                    )
            }
          </Container>
      </>
  )
}

export default ItemDetailContainer
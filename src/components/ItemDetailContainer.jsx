import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Loader from './Loader'
import { Container } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { collection, doc, getDoc, query, where  } from "firebase/firestore"



const ItemDetailContainer = () => {

    const apiUrl = "https://mocki.io/v1/a4191af6-4e16-498e-9191-eb1aab274ca9"
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { id } = useParams()

    const getItems = async () => {
        try {
            const productCollection = doc(db, "ItemCollection", `${id}`)
            getDoc(productCollection)
           .then((result) =>{
               const id = result.id
               const product = {
                   id,
                   ...result.data()
               }
               console.log(product)
               setProducts(product)
           })
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
                        <ItemDetail itemDetail={product} />
                        )   
                )
            }
          </Container>
      </>
  )
}

export default ItemDetailContainer
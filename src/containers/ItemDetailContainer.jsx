import React, { useEffect, useState } from "react";
import ItemDetail from "../containers/ItemDetail";
import Loader from '../components/Loader'
import { Container } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { doc, getDoc  } from "firebase/firestore"



const ItemDetailContainer = () => {

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
               setProducts(product)
           })
        }
        catch {
            setError(true)
        }
        finally {
            setTimeout(() => {
                setLoading(false)
              }, 1500)
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
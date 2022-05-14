import React, { useEffect, useState} from "react";
import ItemList from "../containers/ItemList";
import Loader from "../components/Loader"
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {

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
                  }, 1500)
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
                  }, 1500)
            }
        }

    }

    useEffect(() => {
        getItems()
    }, [category])
    

    return (
        <>
            <Container className="d-flex greeting justify-content-center">
                <Col className="justify-content-center">
                    <Row className="d-flex align-content-center">
                        <h3 className="greeting1 text-center d-flex align-items-center justify-content-center">N° 1</h3>
                    </Row>
                    <Row>
                        <h3 className="greeting2 text-center d-flex align-items-center justify-content-center">GEEK STORE</h3>
                    </Row>
                </Col>
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
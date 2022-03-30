import React from "react"
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {

    return (
        <>
        <Spinner animation="border" variant="info" />
        <p>Loading...</p>
        </>
    )
}

export default Loader;
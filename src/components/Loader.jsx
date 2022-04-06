import React from "react"
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {

    return (
        <>
        <div className="d-flex mt-5 justify-content-center text-info">
            <Spinner animation="border" variant="info"/>
            <p>Loading...</p>
        </div>
        </>
    )
}

export default Loader;
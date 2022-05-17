import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import {FaGithub} from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <div className="py-5 mb-4">
                <Container className="footer ">
                    <Row>
                        <Col md={4} sm={12}>
                            <p className="text-light text-center text-md-start">React-Bootstrap Design</p>
                        </Col>
                        <Col md={4} sm={12}>
                            <p className="text-light text-center">All rights reserved</p>
                        </Col>
                        <Col md={4} sm={12}>
                            <Row>
                                <p className="text-light text-center text-md-end">Developed by Giuliano Giovanelli | <a className="text-light text-center" href="https://github.com/giulianogiova20/" target="blank"><FaGithub size={18}/> Github</a></p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer
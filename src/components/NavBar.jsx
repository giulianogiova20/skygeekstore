import React, { useContext } from "react";
import CartWidget from './CartWidget'
import { Nav, Navbar, NavDropdown, Container, Offcanvas, Col } from 'react-bootstrap'
import { NavLink} from "react-router-dom";
import { context } from "../contexts/CartContext";
import { FaUserCircle } from "react-icons/fa"

const NavBar = () => {

    const { cartQuantity } = useContext(context)

    const categories = [
        { name: "Figures", route: "category/figure", id: 1 },
        { name: "Cups", route: "category/cup", id: 2 },
        { name: "Shirts", route: "category/shirt", id: 3 }
    ]

    const NavLinks = () =>{
        return(
            <>
                <Nav.Link as={NavLink} to="/" className="nav-link"><span>Home</span></Nav.Link>
                <NavDropdown title="Categories"><span>
                    {categories.map((element) => {
                        return (
                            <NavDropdown.Item as={NavLink} key={element.id} to={element.route} className="nav-link"><span>{element.name}</span></NavDropdown.Item>
                        )
                    })}</span>
                </NavDropdown>
                <Nav.Link className="nav-link align-items-center"><FaUserCircle/> John Doe</Nav.Link>

            </>
        )
    }

    return (
        
            <div className="header container-xxl">
               <Container>
               <Navbar key="md"  expand="md" className="mb-3">
                    <Container>
                        <Col>
                            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                            <Nav className="d-none d-md-inline">
                                <NavLinks/>
                            </Nav>
                            
                            <Navbar.Offcanvas
                            id="offcanvasNavbarLabel-expand-md"
                            aria-labelledby="offcanvasNavbarLabel-expand-md"
                            placement="end"
                            >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                                SKY GEEK STORE
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                            <Nav>
                                <NavLinks/>
                            </Nav>
                            </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Navbar.Brand as={NavLink} to="/">
                                            <h1 id="logo">SKY Store</h1>
                            </Navbar.Brand>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Nav.Link as={NavLink} to="/cart" className="nav-link ">
                                <CartWidget cartQuantity = {cartQuantity}/>
                            </Nav.Link>
                        </Col>
                    </Container>
                    </Navbar>
                </Container>
            </div>
    )
}

export default NavBar
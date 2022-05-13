import React, { useContext } from "react";
import CartWidget from './CartWidget'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { NavLink} from "react-router-dom";
import { context } from "../contexts/CartContext";

const NavBar = () => {

    const { cartQuantity } = useContext(context)

    const categories = [
        { name: "Figures", route: "category/figure", id: 1 },
        { name: "Cups", route: "category/cup", id: 2 },
        { name: "Shirts", route: "category/shirt", id: 3 }
    ]

    return (
        
            <div className="header container-xxl">
                <Container >
                    <Navbar expand="lg">
                            <Navbar.Brand as={NavLink} to="/">
                                        <h1 id="logo">SKY Store</h1>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="flex-row justify-content-end">
                                    <Nav>
                                        <Nav.Link as={NavLink} to="/" className="nav-link"><span>Home</span></Nav.Link>
                                        <NavDropdown title="Categories" id="basic-nav-dropdown"><span>
                                            {categories.map((element) => {
                                                return (
                                                    <NavDropdown.Item as={NavLink} key={element.id} to={element.route} className="nav-link"><span>{element.name}</span></NavDropdown.Item>
                                                )
                                            })}</span>
                                        </NavDropdown>
                                        <Nav.Link as={NavLink} to="/" className="nav-link">John Doe</Nav.Link>
                                        <Nav.Link as={NavLink} to="/cart" className="nav-link">
                                            <CartWidget cartQuantity = {cartQuantity}/>
                                            
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
    )
}

export default NavBar
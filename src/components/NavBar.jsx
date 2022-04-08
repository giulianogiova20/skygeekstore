import React from "react";
import CartWidget from './CartWidget'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { NavLink} from "react-router-dom";

const NavBar = () => {

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
                                        <h1>SKY Store</h1>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="flex-row justify-content-end">
                                    <Nav>
                                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                                            {categories.map((element) => {
                                                return (
                                                    <NavDropdown.Item as={NavLink} key={element.id} to={element.route}>{element.name}</NavDropdown.Item>
                                                )
                                            })}
                                        </NavDropdown>
                                        <Nav.Link as={NavLink} to="/">About</Nav.Link>
                                        <Nav.Link as={NavLink} to="/cart"><CartWidget /></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
    )
}

export default NavBar
import Nav from 'react-bootstrap/Nav' 
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home" variant="info">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Store</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3"><CartWidget/></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar
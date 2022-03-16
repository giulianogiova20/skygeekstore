import Nav from 'react-bootstrap/Nav' 
import { IoCartOutline } from "react-icons/io5";

const navbar = () => {
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
                <Nav.Link eventKey="link-3"><IoCartOutline/></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default navbar
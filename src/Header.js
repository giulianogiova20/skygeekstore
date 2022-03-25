import NavBar from "./components/NavBar.jsx"
import "./header.css"
import {Row, Col, Container} from 'react-bootstrap'


const Header = () => {
return (
  <>
  <Container>
    <Row>
      <Col><h1>SKY Geek Store</h1></Col>
      <Col><NavBar/></Col>
    </Row>
    </Container>
  </>
           
)
}

export default Header
import NavBar from "./components/NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./header.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = () => {
return (
    <Container>
    <Row>
      <Col><h1>SKY Geek Store</h1></Col>
      <Col><NavBar/></Col>
    </Row>
  </Container>       
)
}

export default Header

import { Link,Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout=()=>{
  return(
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home |</Nav.Link>
            <Nav.Link as={Link} to="about">About |</Nav.Link>
            <Nav.Link as={Link} to="placement">Placement |</Nav.Link>
            <Nav.Link as={Link} to="gallery">Gallery |</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <hr size="4" color='red'/>

      <Outlet/>

      <hr size="4" color='red'/>
      www.myuniversity.com
    </>
  )
}
export default Layout;
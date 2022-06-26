import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand as={Link} to="/">
           Bike Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link 
              href="home#services">Services</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
             {/* {user? <button onClick={handleSignout}>signout</button> :
               <Nav.Link as={Link} to="/login">
               Login
             </Nav.Link>
             } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
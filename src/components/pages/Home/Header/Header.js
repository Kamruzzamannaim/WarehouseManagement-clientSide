import { signOut } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../../../firebase.init';
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignout=()=>{
    signOut(auth);
  }
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
             {
              user && <Nav>
                 <Nav.Link 
              as={Link} to='/manage'>Manage</Nav.Link>
              <Nav.Link 
              as={Link} to='/addNewItem'>Add new item</Nav.Link>
              <Nav.Link 
              as={Link} to='/myItem'>My item</Nav.Link>
              </Nav>
             }
              <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
             {user? <button className='btn btn-link text-decoration-none text-white' onClick={handleSignout}>signout</button> :
               <Nav.Link as={Link} to="/login">
               Login
             </Nav.Link>
             }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
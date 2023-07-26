import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../asset/img/navbar/logo_1.png';
import palystore from '../../asset/img/navbar/google-play_1.png';
import Triangle from '../../asset/img/navbar/app-store_1.png';
import { Link } from 'react-router-dom';
import "./Navbar.css";


function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className='nav-main'>
      <Container>
        <Link to={'/'}>
        <img src={Logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-bar m-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' , display:"flex", justifyContent:"space-around" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#action2">How it works</Nav.Link>
            <Nav.Link href="#action2">Experts</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
       <div className='navThree col-2  justify-content-around  ' >
         <span>
         Get the App
         </span>
         <img src={palystore} alt="" />
         <img src={Triangle} alt="" />
       </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
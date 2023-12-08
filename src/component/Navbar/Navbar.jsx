import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../asset/img/navbar/logo_1.png';
import Logo1 from '../../asset/img/navbar/newLogo.png';
import palystore from '../../asset/img/navbar/google-play_1.png';
import Triangle from '../../asset/img/navbar/app-store_1.png';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";


function NavScrollExample() {
  const location = useLocation()
  // console.log(location,'locationnnnnn')
  return (
    // <Navbar bg="light" expand="lg" className='nav-main'>
    //   <Container>
    //     <Link to={'/'}>
    //     <img src={Logo} alt="" />
    //     </Link>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="nav-bar m-auto my-2 my-lg-0"
    //         style={{ maxHeight: '200px' , display:"flex", justifyContent:"space-around" }}
    //         navbarScroll
    //       >
    //         <Nav.Link style={{color:location.pathname=='/'?'red':'grey'}} href="/">Home</Nav.Link>
    //         <Nav.Link style={{color:location.pathname=='/about'?'red':'grey'}}  href="#about">About Us</Nav.Link>
    //         <Nav.Link style={{color:location.pathname=='/works'?'red':'grey'}}  href="#action2">How it works</Nav.Link>
    //         <Nav.Link style={{color:location.pathname=='/blog' || location.pathname=='/mainblog'?'red':'grey'}}  href="/blog">Blogs</Nav.Link>
    //         {/* <Nav.Link href="#action2">Experts</Nav.Link> */}
    //         <Nav.Link style={{color:location.pathname=='/contact'?'red':'grey'}} href='/contact'>Contact</Nav.Link>
    //       </Nav>

    //     </Navbar.Collapse>
    //    <div className='navThree col-2  justify-content-around  ' >
    //      <span>
    //      Get the App
    //      </span>
    //      <a target='_blank' href="https://play.google.com/store/apps/details?id=com.helthofit "><img src={palystore} alt="" /></a>
    //      <a target='_blank' href="https://apps.apple.com/in/app/paybycal/id1642523395 "><img src={Triangle} alt="" /></a>
    //      {/* <img src={palystore} alt="" />
    //      <img src={Triangle} alt="" /> */}
    //    </div>
    //   </Container>
    // </Navbar>

    <nav class="container navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"> <img src={Logo1} alt="Bootstrap" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0"> */}
          <ul style={{ margin: '0px 80px', fontSize: '16px' }} class="navbar-nav  mb-2 mb-lg-0 ms-auto newNavbar">
            <li class="nav-item ">
              <a style={{ color: location.pathname == '/' ? 'red' : 'grey', marginRight: '20px', fontWeight: location.pathname == '/' ? 'bold' : 'boldd' }} class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a style={{ color: location.pathname == '/about' ? 'red' : 'grey', marginRight: '20px' }} class="nav-link" href="#about">About Us</a>
            </li>
            <li class="nav-item">
              <a style={{ color: location.pathname == '/works' ? 'red' : 'grey', marginRight: '20px' }} class="nav-link" href="#action2">How it works</a>
            </li>
            <li class="nav-item">
              <a style={{ color: location.pathname == '/experts' ? 'red' : 'grey', marginRight: '20px' }} target='_blank' class="nav-link" href="https://experts.paybycal.com/">Experts</a>
            </li>
            <li class="nav-item">
              <a style={{ color: location.pathname == '/blog' || location.pathname == '/mainblog' ? 'red' : 'grey', marginRight: '20px', fontWeight: location.pathname == '/blog' || location.pathname == '/mainblog' ? 'bold' : 'boldd' }} class="nav-link" href="/blog">Blogs</a>
            </li>
            <li class="nav-item">
              <a style={{ color: location.pathname == '/contact' ? 'red' : 'grey', marginRight: '20px', fontWeight: location.pathname == '/contact' ? 'bold' : 'boldd' }} class="nav-link" href="/contact">Contact</a>
            </li>


          </ul>
          <form class="d-flex  align-items-center" role="search">

            <span>
              Get the App
            </span>
            <a style={{ margin: '0px 10px' }} target='_blank' href="https://play.google.com/store/apps/details?id=com.helthofit "><img src={palystore} alt="" /></a>
            <a target='_blank' href="https://apps.apple.com/in/app/paybycal/id1642523395 "><img src={Triangle} alt="" /></a>
            {/* <img src={palystore} alt="" />
          <img src={Triangle} alt="" /> */}

          </form>
        </div>
      </div>
    </nav>


  );
}

export default NavScrollExample;
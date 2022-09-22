import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'



function AirNavBar() {
  return (
    <>
      <Navbar expand="md" sticky="top" bg="primary" variant="dark" collapseOnSelect>
        <Container className='container'>
          <Navbar.Brand href="/home" className="navbar-brand">
          <img
            src="logo192.png"
            width="30"
            height="30"
            alt="Logo"
            />
          </Navbar.Brand>
          <Nav href="#home" className="navbar-title">
            Travel Wizard
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/bookings">Bookings</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>            

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <br />
    </>
  );


}


export default AirNavBar
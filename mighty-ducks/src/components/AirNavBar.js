import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AirNavBar() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" className="Navbar">
        <Container className="container">
          <Navbar.Brand href="#home" className="navbar-brand">
            <img
            src="logo192.png"
            width="30"
            height="30"
            alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about" className="navbar-links">About</Nav.Link>
            <Nav.Link href="#bookings" className="navbar-links">Bookings</Nav.Link>
            <Nav.Link href="#history" className="navbar-links">History</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default AirNavBar;
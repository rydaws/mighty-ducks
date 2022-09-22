import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AirNavBar() {
  return (
    <>
      <Navbar expand="md" sticky="top" bg="primary" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="home" >
            <img
            src="logo192.png"
            width="30"
            height="30"
            alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="bookings">Bookings</Nav.Link>
            <Nav.Link href="history">History</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default AirNavBar;
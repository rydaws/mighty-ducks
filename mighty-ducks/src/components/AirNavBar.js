import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export async function updateNavBar() {
  document.getElementById("sess").innerHTML = "dfddsss";
}

function AirNavBar() {
  return (
    <>
      <Navbar
        expand="md"
        sticky="top"
        bg="primary"
        variant="dark"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">
            <img src="wizard_logo_man.png" width="60" height="39" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="history">History</Nav.Link>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="signup">Signup</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="home">
                <div id="sess">null</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default AirNavBar;

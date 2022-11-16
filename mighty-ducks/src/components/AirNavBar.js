import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
              <Nav.Link id="favorites" href="favorites">Favorites</Nav.Link>
            </Nav>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link id="sign" href="signup">
                Signup
              </Nav.Link>
              <Nav.Link id="log" href="login">
                Login
              </Nav.Link>
              <Navbar.Text href="login">
                <div id="session"></div>
              </Navbar.Text>
              <Nav.Link id="out" href="logout">
                Log out?
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
export async function updateNavBar() {
  var loginState = localStorage.getItem("loginState");
  var user = localStorage.getItem("user");
  console.log(loginState);
  // none = HIDDEN
  // block = SHOWN
  if (loginState === "true") {
    document.getElementById("favorites").style.display="block";
    document.getElementById("session").innerHTML = "Hello, " + user + "!";
    document.getElementById("log").style.display = "none";
    document.getElementById("sign").style.display = "none";
    document.getElementById("out").style.display = "block";
  } else {
    document.getElementById("favorites").style.display="none";
    document.getElementById("session").innerHTML = "";
    document.getElementById("log").style.display = "block";
    document.getElementById("sign").style.display = "block";
    document.getElementById("out").style.display = "none";
  }
}

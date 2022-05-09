import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header>
        <Navbar sticky="top" bg="black" variant="dark" expand="md">
          <Navbar.Brand href="/">
            <img src="/images/bdglogo.png" width="auto" height="auto" class="position-sticky top-0 start-0 img-fluid rounded-start" className="d-inline-block align-top rounded-start img-fluid" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1 (2).png";

const HeaderNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand href="/" className="brand-glow">
          <img src={Logo} alt="Mamoon Ayoob Logo" className="logo-img me-3" />
          Mamoon.Dev
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="togglebtn bg-light"
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;

import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoo.webp";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RiMenu4Fill } from "react-icons/ri"; // Import the icon

const Header = () => {
  const [expanded, setExpanded] = useState(false); // State to manage navbar toggle

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar-color fixed-top"
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container>
          <Navbar.Brand>
            <NavLink to="/" onClick={closeMenu}>
              <img className="logo" src={logo} alt="Logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle}>
            <RiMenu4Fill /> {/* Use the new icon here */}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                exact
                activeClassName="active"
                onClick={closeMenu}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                exact
                activeClassName="active"
                onClick={closeMenu}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/portfolio"
                exact
                activeClassName="active"
                onClick={closeMenu}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                exact
                activeClassName="active"
                onClick={closeMenu}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

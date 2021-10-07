import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold } from 'react-icons/ai'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navbar.css';

const NavbarItem = () => {
    return (
        <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
            <Link className="navbar-brand" to="/">arial-beel</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span><AiOutlineMenuFold color="#fffafa" fontSize="25px" /></span>
                </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link  eventKey={0} className="nav-link" href="#home">Home</Nav.Link>
                <Nav.Link eventKey={1} className="nav-link" href="#seasons">Seasons</Nav.Link>
                <Nav.Link eventKey={2} className="nav-link" href="#pictures">Pictures</Nav.Link>
                <Nav.Link eventKey={3} className="nav-link" href="#about">About</Nav.Link>
                <Nav.Link eventKey={4} className="nav-link" href="#footer">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavbarItem;
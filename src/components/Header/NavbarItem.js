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
                <Nav.Link as={Link} eventKey={0} className="nav-link" to="/">Home</Nav.Link>
                <Nav.Link as={Link} eventKey={1} className="nav-link" to="/seasons">Seasons</Nav.Link>
                <NavDropdown title="Explore" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} eventKey={2} className="nav-link" to="/pictures">Pictures</Nav.Link>
                <Nav.Link as={Link} eventKey={3} className="nav-link" to="/about">About</Nav.Link>
                <Nav.Link as={Link} eventKey={4} className="nav-link" to="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavbarItem;
import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {

    /*const script = document.createElement('script');
    script.src = "../../../node_modules/bootstrap/dist/js/bootstrap.js";
    script.async = true;*/

    return (    
        <>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Link className="navbar-brand" to="/">React</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                        <NavLink className="nav-link" exact to="/about">About</NavLink>
                        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        <NavDropdown title="Dropdown" exact id="collasible-nav-dropdown">
                            <LinkContainer exact to="/increment-value">
                                <NavDropdown.Item >Increment Value</NavDropdown.Item>    
                            </LinkContainer>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink className="btn btn-dark" exact to="/users/add">Add User</NavLink>
                </Navbar>
            </div>
        </>
    );
}

export default Navigation;
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
                    <Link className="navbar-brand" exact to="/">React</Link>
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
                            <LinkContainer exact to="/call-js-file">
                                <NavDropdown.Item >Call JS File</NavDropdown.Item>    
                            </LinkContainer>
                            <LinkContainer exact to="/hookcall">
                                <NavDropdown.Item >Hookcall</NavDropdown.Item>    
                            </LinkContainer>
                            <LinkContainer exact to="/context">
                                <NavDropdown.Item >Context (instead of Redux)</NavDropdown.Item>    
                            </LinkContainer>
                            <LinkContainer exact to="/card-app">
                                <NavDropdown.Item >Card Application</NavDropdown.Item>    
                            </LinkContainer>
                            <LinkContainer exact to="/image-upload">
                                <NavDropdown.Item >Image Upload</NavDropdown.Item>    
                            </LinkContainer>
                            <LinkContainer exact to="/slider">
                                <NavDropdown.Item >Slider</NavDropdown.Item>    
                            </LinkContainer>
                            <LinkContainer exact to="/dropdown">
                                <NavDropdown.Item >Dropdown</NavDropdown.Item>    
                            </LinkContainer>
                            <LinkContainer exact to="/pass-value-to-function">
                                <NavDropdown.Item >Pass Value to- Function</NavDropdown.Item>    
                            </LinkContainer>
                            <LinkContainer exact to="/multiple-fields">
                                <NavDropdown.Item >Multile Fields</NavDropdown.Item>    
                            </LinkContainer>
                            <LinkContainer exact to="/datepicker">
                                <NavDropdown.Item >Datepicker</NavDropdown.Item>    
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
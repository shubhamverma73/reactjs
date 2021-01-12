import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import * as ReactBoot from 'react-bootstrap';

const Navigation = () => {

    /*const script = document.createElement('script');
    script.src = "../../../node_modules/bootstrap/dist/js/bootstrap.js";
    script.async = true;*/

    return (
        <>
            <div>
                <ReactBoot.Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Link className="navbar-brand" to="/">React</Link>
                    <ReactBoot.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBoot.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBoot.Nav className="mr-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        <ReactBoot.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavLink className="dropdown-item" to="/increment-value">                                    
                                <ReactBoot.NavDropdown.Item href="/increment-value">Link</ReactBoot.NavDropdown.Item>
                            </NavLink>
                        </ReactBoot.NavDropdown>
                        </ReactBoot.Nav>
                    </ReactBoot.Navbar.Collapse>
                    <NavLink className="btn btn-dark" to="/users/add">Add User</NavLink>
                </ReactBoot.Navbar>
            </div>
        </>
    );
}

export default Navigation;
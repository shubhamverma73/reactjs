import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/">React</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink className="btn btn-dark" to="/users/add">Add User</NavLink>
                </nav>
            </div>
        </>
    );
}

export default Navigation;
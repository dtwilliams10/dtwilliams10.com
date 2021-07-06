import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <div >
                <nav >
                    <ul className="navbar">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ul>
                </nav>
            </div>
            );
    }
}

export default NavBar;

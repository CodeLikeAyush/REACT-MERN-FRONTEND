import React from 'react';

// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top fs-4 w-100 ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " style={{ color: "#ff008d" }} aria-current="page" to="/"
                                    activeClassName="active"
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " style={{ color: "#ff008d" }} to="/register"
                                    activeClassName="active"
                                >Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " style={{ color: "#ff008d" }} to="/signin"
                                    activeClassName="active"
                                >SignIn</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link " style={{ color: "#ff008d" }}
                                    to="/profile"
                                    activeClassName="active"
                                >Profile</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-4">
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

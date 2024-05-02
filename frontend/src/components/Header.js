import React from 'react'
import logo from "../assets/lookscout.svg"
import { Link } from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {

    return (
        <header className="navbar navbar-expand-lg p-2 mainbg-color fixed-top" >
            <div className="container-fluid mx-4">
                <Link className="navbar-brand" to="/"><img src={logo} alt='Lookscout' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav px-2 me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active nav-text" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active nav-text" to="/" >Our Products</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle active nav-text" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Resources
                            </Link>
                            <ul className="dropdown-menu ">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active nav-text"  to="/contact-us">Contacts</Link>
                        </li>
                    </ul>
                    <button className="btn text-primary mx-2" type="submit" >Sign Up</button>
                    <button className="btn btn-primary" type="submit"  >Log In</button>
                </div>
            </div>
        </header>
    )
}

export default Header
import React from "react";
import "./Navbar.style.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

	const handlerAboutUS = () => {
		navigate("/AboutUS");
	};
	const handlerHome = () => {
		navigate("/");
	};
	const handlerContactUs = () => {
		navigate("/ContactUs");
	};

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm">
                <div className="container">
                    <a className="navbar-brand text-light fw-bold" 
                        onClick={handlerHome}
                    >
                        TravelPlanner
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="me-auto"></ul>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li className="nav-item">
                                    <a className="nav-link text-light" 
                                        onClick={handlerHome}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">
                                        Travel List
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">
                                        History
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" 
                                    onClick={handlerAboutUS}
                                    
                                >
                                        About us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" 
                                        onClick={handlerContactUs}>
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
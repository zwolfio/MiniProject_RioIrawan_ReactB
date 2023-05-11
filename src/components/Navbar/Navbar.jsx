import React from "react";
import "./Navbar.style.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import authSlice from "../../config/auth/authSlice";


const Navbar = () => {
    const isLogin = useSelector((state)=> state.auth.isLogin);
    const userid = useSelector((state)=> state.auth.userid);
    const navigate = useNavigate();
    const dispatch = useDispatch();

	const handlerAboutUS = () => {
		navigate("/AboutUS");
	};
	const handlerHome = () => {
        console.log(isLogin)
		isLogin?navigate(`/${userid}`): navigate("/")
	};
	const handlerContactUs = () => {
		navigate("/ContactUs");
	};
	const handlerTravelList = () => {
		navigate(`/TravelList/${userid}`);
	};
	const handlerTravelHistory = () => {
		navigate("/TravelHistory");
	};
	const handlerLogOut = () => {
		navigate("/");
        dispatch(authSlice.actions.login(false));
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
                                    <a className="nav-link text-light" 
                                        onClick={handlerTravelList}
                                    >
                                        Travel List
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light"
                                        onClick={handlerTravelHistory}
                                    >
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
                                {isLogin?
                                    <li className="nav-item">
                                        <a className="nav-link text-light" 
                                            onClick={handlerLogOut}>
                                            LogOut
                                        </a>
                                    </li>:<li></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
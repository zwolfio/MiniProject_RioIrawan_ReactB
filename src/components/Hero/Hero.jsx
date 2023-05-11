import React from "react";
import HeroImg from "../../assets/img/hero-img.png"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  "./Hero.style.css"

const Hero = (props) => {
    const isLogin = useSelector((state)=> state.auth.isLogin);
    const navigate = useNavigate();

    const handlerLogin = () => {
        navigate("/Login");
    }
    const handlerSignUp = () => {
        navigate("/SignUp");
    }
    const handlerStart = () => {
        navigate(`/modalCreate`);
    }

    return (
        <div className="container">
            <div className="row w-100 d-flex align-items-center my-5 p-3">
                <div className="col-md-6" >
                    <h1 className="hero-title fw-bold pb-2">
                        Let’s Plan your <br/> Travel
                    </h1>
                    <h5 className="hero-desc pb-2">
                        Travel planner terbaik untuk perjalanan Anda.<br/>
                        Rencanakan liburan yang luar biasa bersama kami <br/>
                        dan nikmati pengalaman tak terlupakan.
                    </h5>
                    {isLogin?<div><a 
                        className="btn rounded-pill fs-5 fw-bold text-white me-3 px-4 "
                        style={{ backgroundColor: "#EF5B00" }}
                        data-bs-toggle="modal" 
                        data-bs-target="#modalCreate"
                    >
                        Start Planning
                    </a>
                    </div>:<div><a 
                        className="btn rounded-pill fs-5 fw-bold text-white me-3 px-4 "
                        onClick={handlerLogin}
                        style={{ backgroundColor: "#EF5B00" }}
                    >
                        Login
                    </a>
                    <a
                        className="text-decoration-none fs-5 fw-bold m"
                        onClick={handlerSignUp}
                        style={{ color: "#EF5B00" }}
                    >
                        Sign Up
                    </a>
                    </div>
                     }
                    
                </div>
                <div className="col-md-6">
                    <img
                        src={HeroImg}
                        className="w-100"
                        alt="hero-img"
                        title="hero-img"
                    />
                </div>
            </div>
        </div>
    )

}

export default Hero;
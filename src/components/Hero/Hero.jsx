import React from "react";
import HeroImg from "../../assets/img/hero-img.png"
import "./Hero.style.css"

const Hero = () => {

    return (
        <div className="container">
            <div className="row min-vh-100 d-flex align-items-center p-3">
                <div className="col-md-6" >
                    <h1 className="hero-title fw-bold pb-2">
                        Let’s Plan your <br/> Travel
                    </h1>
                    <h5 className="hero-desc pb-2">
                        Travel planner terbaik untuk perjalanan Anda.<br/>
                        Rencanakan liburan yang luar biasa bersama kami <br/>
                        dan nikmati pengalaman tak terlupakan.
                    </h5>
                    <a 
                        className="btn rounded-pill fs-5 fw-bold text-white me-3 px-4 "
                        href="#"
                        style={{ backgroundColor: "#EF5B00" }}
                    >
                        Login
                    </a>
                    <a
                        className="text-decoration-none fs-5 fw-bold m"
                        href="#"
                        style={{ color: "#EF5B00" }}
                    >
                        Sign Up
                    </a>
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
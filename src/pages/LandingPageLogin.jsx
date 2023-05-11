import React from "react";
import Navbar from "../components/navbar/navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer"
import TravelList from "./TravelList";
import { useParams } from "react-router";

const LandingPageLogin = () => {

    const {username} = useParams()

    return (
	    <div>
            <Navbar/>
            <Hero
                username={username}
            />
            
            <Footer/>
        </div>
    )

}

export default LandingPageLogin
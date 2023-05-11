import React from "react";
import LandingPage from "../../pages/LandingPage";
import AboutUs from "../../pages/AboutUs"
import ContactUs from "../../pages/ContactUs"
import Login from "../../pages/Login";
import Signup from "../../pages/SignUp";
import TravelList from "../../pages/TravelList";
import TravelHistory from "../../pages/TravelHistory";
import LandingPageLogin from "../../pages/LandingPageLogin";

export const routing = [
    {
        path: "/",
        element: <LandingPage/>,
        isPrivate: false,
    },
    {
        path: "/:id",
        element: <LandingPageLogin/>,
        isPrivate: true,
    },
    {
        path: "/AboutUs",
        element: <AboutUs/>,
        isPrivate: false,
    },
    {
        path: "/ContactUs",
        element: <ContactUs/>,
        isPrivate: false,
    },
    {
        path: "/Login",
        element: <Login/>,
        isPrivate: false,
    },
    {
        path: "/SignUp",
        element: <Signup/>,
        isPrivate: false,
    },
    {
        path: "/TravelList",
        element: <TravelList/>,
        isPrivate: true,
    },
    {
        path: "/TravelHistory",
        element: <TravelHistory/>,
        isPrivate: true,
    },
    
];
import React from "react";
import LandingPage from "../../pages/LandingPage";
import AboutUs from "../../pages/AboutUs"
import ContactUs from "../../pages/ContactUs"
import Login from "../../pages/Login";

export const routing = [
    {
        path: "/",
        element: <LandingPage/>,
        isPrivate: false,
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
    }
    
];
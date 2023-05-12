import React from "react";
import LandingPage from "../../pages/LandingPage";
import AboutUs from "../../pages/AboutUs"
import ContactUs from "../../pages/ContactUs"
import Login from "../../pages/Login";
import Signup from "../../pages/SignUp";
import TravelList from "../../pages/TravelList";
import TravelHistory from "../../pages/TravelHistory";
import LandingPageLogin from "../../pages/LandingPageLogin";
import DetailPlan from "../../components/detailPlan/detailPlan";
import EditPlan from  "../../components/editPlan/editPlan";

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
        path: "/TravelList/:id",
        element: <TravelList/>,
        isPrivate: true,
    },
    {
        path: "/TravelHistory/:id",
        element: <TravelHistory/>,
        isPrivate: true,
    },
    {
        path: "/detail/:id",
        element: <DetailPlan/>,
        isPrivate: true,
    },
    {
        path: "/edit/:id",
        element: <EditPlan/>,
        isPrivate: true,
    },
    
    
];
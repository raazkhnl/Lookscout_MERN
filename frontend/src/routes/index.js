// import * as React from "react";
// import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import ContactUs from "../components/ContactUs";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ForgotPassword from "../pages/ForgotPassword";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/login",
                element: <LogIn/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/edit-user",
                element: <EditProfile/>
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            }
        ]
    }
])
export default router;
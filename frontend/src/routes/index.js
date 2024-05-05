// import * as React from "react";
// import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import ContactUs from "../components/ContactUs";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ForgotPassword from "../pages/ForgotPassword";
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
                path: "/contact-us",
                element: <ContactUs />
            }
        ]
    }
])
export default router;
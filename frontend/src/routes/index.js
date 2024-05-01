// import * as React from "react";
// import { createRoot } from "react-dom/client";
import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import ContactUs from "../components/ContactUs";
const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element: <Home/>
        },
        {
            path : "/contact-us",
            element: <ContactUs/>
    }
        ]
    }
])
export default router;
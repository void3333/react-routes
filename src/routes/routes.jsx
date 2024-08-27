import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import About from "../pages/About/About.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "about",
                element: <About/>
            },
        ],
    },
]);

export default routes;
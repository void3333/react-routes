import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import Contact from "../pages/Contact/Contact.jsx";

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
        ],
    },
]);

export default routes;
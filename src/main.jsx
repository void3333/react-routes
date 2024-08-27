import './index.css'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import routes from "./routes/routes.jsx";

createRoot(document.getElementById('root')).render(
    <RouterProvider
        router={routes}
        fallback={null}
    />
);

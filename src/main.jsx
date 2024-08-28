import './index.css'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import routes from "./routes/routes.jsx";
import {ThemeProvider} from "./services/index.jsx";

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <RouterProvider router={routes}/>
    </ThemeProvider>
);

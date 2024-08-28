import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout.jsx';
import Home from '../pages/Home/Home.jsx';
import Contact from '../pages/Contact/Contact.jsx';
import About from '../pages/About/About.jsx';
import Login from '../pages/Login/Login.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'contact',
                element: (
                    <ProtectedRoute>
                        <Contact />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'about',
                element: (
                    <ProtectedRoute>
                        <About />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

export default routes;

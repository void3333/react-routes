import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";
import { isAuthenticated, logout } from "../../services/authService";
import './Layout.css';

const Layout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    // Check if the user is authenticated
    if (!isAuthenticated()) {
        navigate("/login");
        return null; // Prevent rendering the layout if not authenticated
    }

    return (
        <div>
            <div className="layout-container">
                <Header />
                <Sidebar />
                <div className="outlet-container">
                    <Outlet />
                </div>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Layout;

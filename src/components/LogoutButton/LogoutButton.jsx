import {isAuthenticated, logout} from "../../services/authService.jsx";
import {useNavigate} from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();
    if (!isAuthenticated()) {
        navigate('/login');
        return null; // Prevent rendering the layout if not authenticated
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
import {useTheme} from '../../services/index.jsx';
import PropTypes from "prop-types"; // Adjust the path
import './Header.css'
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

const Header = ({onToggleTheme}) => {
    const {theme} = useTheme();

    return (
        <header className={`header ${theme}`}>
            <h1>My Application</h1>
            <button onClick={onToggleTheme} className="theme-toggle-button">
                Toggle Theme
            </button>
            <LogoutButton/>
        </header>
    );
};

Header.propTypes = {
    onToggleTheme: PropTypes.func.isRequired,
}

export default Header;

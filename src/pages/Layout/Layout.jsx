import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Header from '../../components/Header/Header.jsx';
import { useTheme } from '../../services/index.jsx';
import './Layout.css';

const Layout = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`layout-container ${theme}`}>
            <Header onToggleTheme={toggleTheme} />
            <Sidebar />
            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;

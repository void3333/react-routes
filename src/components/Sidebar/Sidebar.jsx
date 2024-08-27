import {NavLink} from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <nav id="sidebar">
                <NavLink to="home"
                         className={({isActive}) => isActive ? "active" : ""}>
                         <span>HOME</span>
                </NavLink>

                <NavLink to="contact"
                         className={({isActive}) => isActive ? "active" : ""}>
                         <span>CONTACTS</span>
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
import {Outlet} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Header from "../../components/Header/Header.jsx";
import './Layout.css'

const Layout = () => {
    return (
        <div>
            <div className="layout-container">
                <div>
                    <Header/>
                </div>
                <div>
                    <Sidebar/>
                </div>
                <div className="outlet-container">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Layout;
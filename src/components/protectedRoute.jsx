import {Navigate} from 'react-router-dom';
import {isAuthenticated} from '../services/authService';
import PropTypes from "prop-types";

const ProtectedRoute = ({children}) => {
    return isAuthenticated() ? children : <Navigate to="/login"/>;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProtectedRoute;

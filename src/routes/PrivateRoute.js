import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { MyContext } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(MyContext);

    const location = useLocation();
    if (loading) {
        return <Loader />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    }
    return children;

};

export default PrivateRoute;
import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';

const ProtectedRoute = ({children}) => {
    const { token } = useContext(UserContext);
    return (        
            token ? children : <Navigate to='/login' />        
    );
};

export default ProtectedRoute;
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import authService from '~/config/APIConfig';

const AuthWrapper = ({ children }) => {
    const [isValidToken, setIsValidToken] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const verifyTokenAsync = async () => {
            try {
                if (location.pathname.includes('/login') || !localStorage.getItem('token')) {
                    setIsValidToken(false);
                    return;
                }
                // Call authService to verify token
                await authService.verifyToken();

                setIsValidToken(true); // Valid tokens
            } catch (error) {
                setIsValidToken(false); // Invalid token or no token
            }
        };

        // Call the verifyTokenAsync function without additional dependencies
        verifyTokenAsync();
    }, [location.pathname]);

    // Logic to check isValidToken and decide on redirection
    if (isValidToken === null) {
        return <div>Loading...</div>;
    } else if (!isValidToken) {
        return <Navigate to="/login" replace />;
    }

    // If token is valid, render children
    return children;
};

export default AuthWrapper;

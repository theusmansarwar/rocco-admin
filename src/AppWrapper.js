import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import App from './App';
import Login from './Components/Login/Login';

function AppWrapper() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('login') === 'true');
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        localStorage.setItem('login', 'true');
        navigate('/');
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('login');
        navigate('/login');
    };

    return (
        <Routes>
            {isAuthenticated ? (
                <Route path="/*" element={<App onLogout={handleLogout} />} />
                
            ) : (
                <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            )}
        </Routes>
    );
}

export default AppWrapper;

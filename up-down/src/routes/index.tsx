import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Topics } from '../pages/topics';
import { NotFound } from '../pages/NotFound';
import { About } from '../pages/about';
import { LoginPage } from '../pages/login';
import { AuthProvider, useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }:{children:React.ReactNode}) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <>{children}</>;
    } else {
        return <Navigate to="/login" />;
    }
};

export const MyRouter = (
    <AuthProvider>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/about/*"
                element={
                    <PrivateRoute>
                        <About />
                    </PrivateRoute>
                }
            />
            <Route
                path="/topics/*"
                element={
                    <PrivateRoute>
                        <Topics />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </AuthProvider>
);

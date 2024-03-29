import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";

interface IProps {
    children?: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
    const {
        authState: { user },
    } = useAuth();
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

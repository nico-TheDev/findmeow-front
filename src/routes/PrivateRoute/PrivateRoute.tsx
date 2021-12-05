import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";

interface IProps {
    children?: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

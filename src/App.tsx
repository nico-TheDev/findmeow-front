import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";
import PrivateRoute from "routes/PrivateRoute";
// LAYOUT
import Nav from "components/layout/Nav";
// PAGES
import LandingPage from "components/pages/LandingPage";
import HomePage from "components/pages/HomePage";
import FindPage from "components/pages/FindPage";

function App() {
    const auth = useAuth();

    return (
        <BrowserRouter>
            {auth && <Nav />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LandingPage />} />
                <Route path="/dashboard" element={<PrivateRoute />}>
                    <Route path="home" element={<HomePage />} />
                    <Route path="find" element={<FindPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

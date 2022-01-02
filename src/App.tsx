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
import AdoptPage from "components/pages/AdoptPage";
import ProfilePage from "components/pages/ProfilePage";
import CreatePostPage from "components/pages/CreatePostPage";
import NotFoundPage from "components/pages/NotFoundPage";
import PetProfilePage from "components/pages/PetProfilePage";
import SignupPage from "components/pages/SignupPage";

function App() {
    const { authState } = useAuth();

    const { token } = authState;

    return (
        <BrowserRouter>
            {token && <Nav />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LandingPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<PrivateRoute />}>
                    <Route path="home" element={<HomePage />} />
                    <Route path="find" element={<FindPage />} />
                    <Route path="adopt" element={<AdoptPage />} />
                    <Route path=":type/:id" element={<PetProfilePage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="post/create" element={<CreatePostPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

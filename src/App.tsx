import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuth } from "contexts/AuthContext";
import PrivateRoute from "routes/PrivateRoute";
// LAYOUT
import Nav from "components/layout/Nav";
// PAGES
import LoginPage from "components/pages/LoginPage";
import HomePage from "components/pages/HomePage";
import FindPage from "components/pages/FindPage";
import AdoptPage from "components/pages/AdoptPage";
import ProfilePage from "components/pages/ProfilePage";
import CreatePostPage from "components/pages/CreatePostPage";
import NotFoundPage from "components/pages/NotFoundPage";
import PetProfilePage from "components/pages/PetProfilePage";
import SignupPage from "components/pages/SignupPage";
import OtherProfilePage from "components/pages/OtherProfilePage";
import EditPostPage from "components/pages/EditPostPage";
import EditProfilePage from "components/pages/EditProfilePage";

function App() {
    const { authState } = useAuth();

    const { token } = authState;

    return (
        <BrowserRouter>
            {token && <Nav />}
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<PrivateRoute />}>
                    <Route path="home" element={<HomePage />} />
                    <Route path="find" element={<FindPage />} />
                    <Route path="adopt" element={<AdoptPage />} />
                    <Route path=":type/:id" element={<PetProfilePage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="profile/:id" element={<OtherProfilePage />} />
                    <Route path="post/create" element={<CreatePostPage />} />
                    <Route path="edit_post" element={<EditPostPage />} />
                    <Route path="edit_profile" element={<EditProfilePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

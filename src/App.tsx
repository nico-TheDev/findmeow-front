import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import LandingPage from "components/pages/LandingPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";

import { AuthContextProvider } from "contexts/AuthContext";

import theme from "theme/ThemeProvider";
import "./assets/css/default.css";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <SWRConfig
            value={{
                shouldRetryOnError: true,
            }}
        >
            <ThemeProvider theme={theme}>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </ThemeProvider>
        </SWRConfig>
    </React.StrictMode>,
    document.getElementById("root")
);

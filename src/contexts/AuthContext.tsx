import React, { createContext, useState, useContext } from "react";

type CountProviderProps = { children: React.ReactNode };

const AuthContext = createContext<{ isLoggedIn: Boolean } | undefined>(
    undefined
);

export const AuthContextProvider = ({ children }: CountProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const value = {
        isLoggedIn,
        setIsLoggedIn,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("UseAuth must be within an AuthContextProvider");
    }

    return context;
};

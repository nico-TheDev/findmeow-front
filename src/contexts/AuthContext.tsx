import React, { createContext, useContext, useEffect, useReducer } from "react";

import AuthReducer from "reducers/AuthReducer";
import { CountProviderProps, AuthState, AuthDispatch } from "types/ActionTypes";

const AuthContext = createContext<
    | {
          authState: AuthState;
          authDispatch: AuthDispatch;
      }
    | undefined
>(undefined);

const initialState = () => {
    if (localStorage.getItem("token")) {
        return {
            token: localStorage.getItem("token"),
            user: JSON.parse(localStorage.getItem("user") || "{}"),
            userID: localStorage.getItem("userID"),
        };
    }

    return {
        token: null,
        user: null,
        userID: null,
    };
};

export const AuthContextProvider = ({ children }: CountProviderProps) => {
    const [authState, authDispatch] = useReducer(AuthReducer, {}, initialState);

    const value = {
        authState,
        authDispatch,
    };

    useEffect(() => {}, []);

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

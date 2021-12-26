import React, { createContext, useState, useContext } from "react";

type CountProviderProps = { children: React.ReactNode };

const AuthContext = createContext<
    | {
          isLoggedIn: Boolean;
          setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
          authDetails: {
              user: {};
              token: string;
          };
          setAuthDetails: React.Dispatch<
              React.SetStateAction<{
                  user: {};
                  token: string;
              }>
          >;
      }
    | undefined
>(undefined);

export const AuthContextProvider = ({ children }: CountProviderProps) => {
    const [authDetails, setAuthDetails] = useState({
        user: {},
        token: "",
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const value = {
        authDetails,
        setAuthDetails,
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

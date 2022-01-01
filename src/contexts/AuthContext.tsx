import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    useReducer,
} from "react";

import AuthReducer from "reducers/AuthReducer";

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

const initialState = () => {
    if (localStorage.getItem("token"))
        return {
            token: localStorage.getItem("token"),
            user: JSON.parse(localStorage.getItem("user")),
            userID: localStorage.getItem("userID"),
        };

    return {
        token: null,
        user: null,
        userID: null,
    };
};

export const AuthContextProvider = ({ children }: CountProviderProps) => {
    const [authState, authDispatch] = useReducer(AuthReducer, initialState);
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

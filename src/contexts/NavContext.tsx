import React, { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CountProviderProps } from "types/ActionTypes";

const NavContext = createContext<
    | {
          isNavOpen: boolean;
          setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
      }
    | undefined
>(undefined);

export const NavContextProvider = ({ children }: CountProviderProps) => {
    const location = useLocation();
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        setIsNavOpen(false);
    }, [location.pathname]);

    const value = { isNavOpen, setIsNavOpen };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNav = () => {
    const context = useContext(NavContext);

    if (context === undefined) {
        throw new Error("useNav must be within an NavContextProvider");
    }

    return context;
};

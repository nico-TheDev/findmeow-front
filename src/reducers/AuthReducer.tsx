import { Reducer } from "react";
import { Actions, AuthAction, AuthState } from "types/ActionTypes";

function saveToLocalStorage(
    token: string | null | undefined,
    id: string | null | undefined
) {
    localStorage.setItem("token", token || "");
    localStorage.setItem("userID", id || "");
}

const AuthReducer: Reducer<AuthState, AuthAction> = (state, action) => {
    switch (action.type) {
        case Actions.SET_TOKEN:
            saveToLocalStorage(action.payload?.token, action.payload?.userID);
            return {
                ...state,
                token: action.payload?.token,
                userID: action.payload?.userID,
            };
        case Actions.SET_USER:
            localStorage.setItem("user", JSON.stringify(action.payload?.user));
            return {
                ...state,
                user: action.payload?.user,
            };
        case Actions.LOGIN_USER:
            return state;
        case Actions.LOGOUT_USER:
            localStorage.clear();
            return {
                token: null,
                user: null,
                userID: null,
            };
        default:
            return state;
    }
};

export default AuthReducer;

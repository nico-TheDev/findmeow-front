export enum Actions {
    LOGIN_USER = "LOGIN_USER",
    SET_USER = "SET_USER",
    SET_TOKEN = "SET_TOKEN",
    LOGOUT_USER = "LOGOUT_USER",
}

export type CountProviderProps = { children: React.ReactNode };

export interface AuthAction {
    type: Actions;
    payload?: AuthState | undefined;
}

export type AuthDispatch = (action: AuthAction) => void;

interface UserType {
    email: string;
    name: string;
    username: string;
    profileImg: string;
    location: string;
    contact: string;
}
// An interface for our state
export interface AuthState {
    token?: string | null | undefined;
    userID?: string | null | undefined;
    user?: null | UserType | string | undefined;
}

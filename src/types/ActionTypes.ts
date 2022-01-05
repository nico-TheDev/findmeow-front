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
    user?: null | UserType | undefined;
}

export enum ROUTES {
    LANDING = "/",
    LOGIN = "/login",
    SIGNUP = "/signup",
    HOME = "/dashboard/home",
    FIND = "/dashboard/find",
    PROFILE = "/dashboard/profile",
    CREATE_POST = "/dashboard/post/create",
}

export interface PetDetails {
    _id: string | number;
    profileImg: string;
    image: string;
    name: string;
    location: string;
    date: string;
    description: string;
}

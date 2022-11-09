import { IAuthProvider, Login } from '@interfaces/Context';
import { Props } from '@interfaces/General';
import { TokenManager } from '@lib/TokenManager';
import React, { useState, createContext, useEffect, useContext } from 'react';
const AuthContext = createContext<IAuthProvider>({} as IAuthProvider);
const { Provider } = AuthContext;
export function AuthProvider({ children }: Props) {
    const savedToken = () => localStorage.getItem("token");
    const savedExpiration = (): number => {
        let date = localStorage.getItem("expiresAt") || "";
        return new Date(date).getTime() / 1000;
    };
    const savedUser = (token: string | null): any => {
        if (token) {
            const { data: user } = TokenManager.decodeToken(token);
            return user;
        }
        return "";
    };
    const [token, setToken] = useState(savedToken());
    const [user, setUser] = useState(savedUser(token));
    const [expiration, setExpiration] = useState<number | null>(savedExpiration());
    useEffect(() => {
        setInterval(() => {
            validateToken();
        }, 1000);
        // eslint-disable-next-line
    }, []);
    const validateToken = (): void => {
        if (localStorage.getItem("token") === null) {
            LogOut();
        }
    }
    const isAutenticated = (): boolean => {
        if (!token || !expiration) {
            return false;
        }
        if (new Date().getTime() / 1000 >= expiration) {
            return false;
        }
        return true;
    }
    const Login = (data: Login) => {
        localStorage.setItem("token", data.token);
        let exp = new Date(data.expiresAt * 1000);
        localStorage.setItem("expiresAt", exp.toISOString());
        setUser(savedUser(data.token));
        setToken(data.token);
        setExpiration(data.expiresAt);
    }
    const LogOut = (): void => {
        localStorage.removeItem("token");
        localStorage.removeItem("expiresAt");
        setToken(null);
        setExpiration(null);
    }
    //let value = { user, signin, signout };
    return (
        <Provider value={{
            token,
            user,
            validateToken,
            isAutenticated,
            Login,
            LogOut
        }}>
            {children}
        </Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}

import React, { useState, createContext, useEffect, useContext } from 'react';
import { Props } from '../interfaces/General';


const AuthContext = createContext(null);
const { Provider } = AuthContext;
export function AuthProvider({ children }: Props) {
    const savedToken = localStorage.getItem("token");
    const savedExpiration = localStorage.getItem("expiresAt");
    const savedUser = "";
    const [token, setToken] = useState(savedToken);
    const [user, setUser] = useState(savedUser);
    const [expiration, setExpiration] = useState(savedExpiration);
    useEffect(() => {
        setInterval(() => {
            validateToken();
        }, 1000);
        // eslint-disable-next-line
    }, []);
    const validateToken = () => {
        if (localStorage.getItem("token") === null) {
            LogOut();
        }
    }
    const isAutenticated = () => {
        if (!token || !expiration) {
            return false;
        }
        if (new Date().getTime() / 1000 >= expiration) {
            return false;
        }
        return true;
    }
    const Login = (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("savedData", window.btoa(JSON.stringify(data.user)));
        let exp = new Date(data.expiresAt * 1000);
        localStorage.setItem("expiresAt", exp.toISOString())
        setToken(data.token);
        setUser(data.user);
        setExpiration(data.expiresAt);
    }
    const LogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("savedData");
        localStorage.removeItem("expiresAt");
        setToken(null);
        setUser({});
        setExpiration("");
    }
    const credentials = {
        token,
        user,
        validateToken,
        isAutenticated,
        Login,
        LogOut
    };
    //let value = { user, signin, signout };
    return (
        <Provider value={
            credentials
        }>
            {children}
        </Provider>
    );
}
export default function useAuth() {
    return useContext(AuthContext);
}
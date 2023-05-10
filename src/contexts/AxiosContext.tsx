
import { IAxiosContext } from '@interfaces/Context';
import { Props } from '@interfaces/General';
import axios from 'axios';
import React, { createContext, useContext } from 'react';
import { useAuth } from './AuthProvider';

const AxiosContext = createContext<IAxiosContext>({} as IAxiosContext);
const { Provider } = AxiosContext;

export function AxiosProvider({ children }: Props) {
    const { LogOut } = useAuth();
    const publicFetch = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });
    const privateFetch = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    privateFetch.interceptors.request.use(
        async config => {
            const token = localStorage.getItem("token");
            config.headers = {
                ...config.headers,
                'Authorization': `Bearer ${token}`,
            }
            return config;
        },
        error => {
            Promise.reject(error)
        });
    privateFetch.interceptors.response.use(
        response => {
            if(response.data.text === "Unauthorized" ) LogOut();
            return response;
        },
        async error => {
            Promise.reject(error);
        }
    );
    return (
        <Provider value={{
            publicFetch,
            privateFetch
        }}>
            {children}
        </Provider>
    );
}
export function useAxios() {
    return useContext(AxiosContext);
}
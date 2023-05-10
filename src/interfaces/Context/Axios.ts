import { AxiosInstance } from 'axios';
export interface IAxiosContext {
    publicFetch: AxiosInstance,
    privateFetch: AxiosInstance;
}
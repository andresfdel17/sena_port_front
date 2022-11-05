import axios from 'axios';

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
            'Authorization': `Bearer ${token}`,
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });
export { publicFetch, privateFetch };
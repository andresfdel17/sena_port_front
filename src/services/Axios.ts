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
            'Content-Type': "multipart/form-data"
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });
privateFetch.interceptors.response.use(
    response => {
        console.log(response);
        return response;
    },
    async error => {
        Promise.reject(error);
    }
);
export { publicFetch, privateFetch };
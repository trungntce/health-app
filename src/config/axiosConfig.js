import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3031/api',
});

API.interceptors.request.use(function (config) {
    // Add token to the header of each request before sending
    const token = localStorage.getItem('token');

    // If the token exists, add the Authorization header
    if (token) {
        config.headers.Authorization = token ? `Bearer ${token}` : '';
    }

    return config;
});

export default API;

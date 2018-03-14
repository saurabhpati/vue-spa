import axios from 'axios';
axios.defaults.baseURL = 'https://api.fullstackweekly.com';
axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
    return config;
});

export default class BaseService {
    serviceClient = axios;
}
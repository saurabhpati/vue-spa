import axios from 'axios';
axios.defaults.baseURL = 'https://api.fullstackweekly.com';

export default class BaseService {
    serviceClient = axios;
}
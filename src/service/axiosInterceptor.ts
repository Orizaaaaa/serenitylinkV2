import axios from 'axios';
import { url } from './auth';

const token = localStorage.getItem('token');
export const axiosInterceptor = axios.create({
    baseURL: url,
    // timeout: 5000,
    headers: {
        'Authorization': `${token}`,
    },
});

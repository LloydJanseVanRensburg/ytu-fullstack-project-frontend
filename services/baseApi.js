import KEYS from '@/config/keys';
import axios from 'axios';

const baseApi = axios.create({
    baseURL: KEYS.API_URL,
});

export default baseApi;

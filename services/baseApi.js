import axios from 'axios';

const baseApi = axios.create({
    baseURL: 'http://localhost:3001',
});

export default baseApi;

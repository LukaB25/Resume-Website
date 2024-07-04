import axios from 'axios';

axios.defaults.baseURL = '/api';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
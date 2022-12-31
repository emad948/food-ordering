import axios, { AxiosRequestConfig } from 'axios';

import apiConfig from '../config/api';

const config: AxiosRequestConfig = {
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

const instance = axios.create(config);

export default instance;

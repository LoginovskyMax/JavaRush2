import axios from "axios";
import { TOKEN } from "../types";

const BASE_URL = 'https://rickandmortyapi.com/api/'

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

apiClient.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem(TOKEN)
        if(token){
           config.headers.Authorization = `Bearer ${token}`
        }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
)

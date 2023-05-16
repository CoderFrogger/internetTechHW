import axios from "axios";

const axiosClinet = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`
})

axiosClinet.interceptors.request.use( (config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

axiosClinet.interceptors.response.use( (response) => {
    return response;
}, (error) => {
    const {response} = error;
    if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN')
    } else {
        throw error;
    }
})

export default axiosClinet;

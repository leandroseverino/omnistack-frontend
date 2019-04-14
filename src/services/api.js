import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-server.herokuapp.com'
});

export default api;
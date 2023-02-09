import axios from 'axios';

const api = axios.create({

    baseURL: 'https://hampix-server-production.up.railway.app'

});

export { api };
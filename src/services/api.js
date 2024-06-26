import axios from 'axios';

let token = localStorage.getItem('token') || null;

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": 'application/json',
    Accept: 'application/json'
  },
})

export default api;
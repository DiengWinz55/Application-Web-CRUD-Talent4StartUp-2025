import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Changez en fonction de votre backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

import axios from 'axios';
const { REACT_APP_API_URL } = process.env
const loginEndpoint = 'user/login';
const tokenEndpoint = 'user/token';

// API request for login
export const loginRequest = (formData) => axios.post(`${REACT_APP_API_URL}${loginEndpoint}`, formData);

// API request for fetching token
export const getTokenRequest = (formData) => axios.post(`${REACT_APP_API_URL}${tokenEndpoint}`, formData);



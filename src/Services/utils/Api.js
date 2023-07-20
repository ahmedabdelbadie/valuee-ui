import axios from 'axios';

const apiBaseUrl = 'http://localhost/';
const loginEndpoint = 'user/login';
const tokenEndpoint = 'user/token';

// API request for login
export const loginRequest = (formData) => axios.post(`${apiBaseUrl}${loginEndpoint}`, formData);

// API request for fetching token
export const getTokenRequest = (formData) => axios.post(`${apiBaseUrl}${tokenEndpoint}`, formData);


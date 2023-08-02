import axios from 'axios';

const apiLink = 'https://valueapi.valueplus3.com';
const loginEndpoint = '/auth/login';
const tokenEndpoint = 'user/token';

// API request for login
export const loginRequest = (formData) => axios.post(`${apiLink}${loginEndpoint}`, formData);




// API request for fetching token
export const getUserById = (userId) => axios.post(`${apiLink}${tokenEndpoint}`, userId);

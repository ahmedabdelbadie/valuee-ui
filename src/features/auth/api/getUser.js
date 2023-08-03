import { axios } from '../../../lib/axios';

export const getUser = (userId) => {
  return axios.get('/auth/me');
};

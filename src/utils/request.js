/* eslint no-param-reassign: off */
import axios from 'axios';
import {API_URL} from '../constants/endpoint';

const CancelToken = axios.CancelToken;

export const getCancelToken = () => {
  return CancelToken.source();
};

export const isCancelled = error => {
  return axios.isCancel(error);
};

export const http = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const update = async (url, data, options) => {
  const response = await http.put(url, data, {
    ...options,
  });
  return response.data;
};

export const post = async (url, data, options) => {
  const response = await http.post(url, data, {
    ...options,
  });
  return response.data;
};

export const get = async (url, options) => {
  const response = await http.get(url, {
    ...options,
  });
  return response.data;
};

// Enable these to debug requests
// http.interceptors.request.use(request => {
//   console.log(
//     'Axios',
//     `[${request.method.toUpperCase()}]`,
//     request.url,
//     request.params,
//     request
//   );
//   console.log(request);
//   return Promise.resolve(request);
// });

// http.interceptors.response.use(response => {
//   console.log(response.data);
//   return Promise.resolve(response);
// });

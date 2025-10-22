import { http } from './client';

http.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

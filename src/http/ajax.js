import axiosInstance from './axios';

const ajax = (url, method = 'post') => {
  return (params) => {
    const paramsKey = method === 'post' ? 'data' : 'params';
    return axiosInstance({ method, url, [paramsKey]: params });
  };
};

export default ajax;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000
});

axiosInstance.interceptors.request.use(
  config => {
    const { method } = config;
    return config;
  },
  err => {
    console.log('请求出错');
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  res => {
    const { data, status } = res;
    const tipError = () => {
      alert(data.msg || '服务器异常');
      return Promise.reject();
    };
    if (status === 200) { // 服务器响应成功
      if (data.code === 0) { // 服务器返回数据正确
        return data;
      }
      return tipError();
    }
    return tipError();
  },
  err => {
    console.log(`响应出错: ${err.message}`);
    return Promise.reject(err);
  }
);

export default axiosInstance;

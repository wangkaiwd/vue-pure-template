import axiosInstance from './axios';
import qs from 'qs';
// qs: 将js对象转换为 key1=val1&key2=val2格式的工具
const ajax = (url, method = 'post') => (params) => {
  const cfg = {
    post: {
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(params)
    },
    get: { params }
  };
  // 请求头默认都是 Content-Type: application/json
  return axiosInstance(
    {
      method,
      url,
      ...cfg[method]
    }
  );
};

export default ajax;

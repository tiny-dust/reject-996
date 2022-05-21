import axios from 'axios';

const request = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000,
});

// 拦截器 预留
// request.interceptors.request.use((res) => res, (err) => err);
// request.interceptors.response.use((res) => res, (err) => err);

const api = {
  getCompanies() {
    return request.get('/company/list');
  },
  registerEmailCode(params: {email: string}) {
    return request.get('/users/getCode', { params });
  },
};

export default api;

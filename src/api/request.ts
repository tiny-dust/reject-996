import axios from 'axios';

const request = axios.create({
  baseURL: 'http://150.158.181.254',
  timeout: 60 * 1000,
});

// 拦截器 预留
// request.interceptors.request.use((res) => res, (err) => err);
// request.interceptors.response.use((res) => res.data, (err) => err);

const api = {
  getCompanies(params: { search: string}) {
    return request.get('/company/list', { params });
  },
  registerEmailCode(params: {email: string}) {
    return request.get('/users/getCode', { params });
  },
  getCompanyDetail(params: { id: string }) {
    return request.get('/company/detail', { params });
  },
};

export default api;

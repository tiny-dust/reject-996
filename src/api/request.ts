import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : import.meta.env.VITE_APP_BASE_URL,
  timeout: 60 * 1000,
});

export interface CommonResult<T = string | Record<string, any>> {
  code: number,
  message: string,
  data: T
}

export interface UserInfo{
  email: string,
  userId: string,
  token: string
}

export interface Company{
  index: number,
  id: string,
  name: string,
  score: number,
  comment: string
}
export interface CompanyDetail{
  index: number,
  id: string,
  company_id: string,
  score: number,
  comment: string
}

// 拦截器 预留
request.interceptors.request.use((res) => {
  const token = localStorage.getItem('token');
  if (token && res.headers) {
    res.headers.token = token;
  }
  return res;
}, (err) => err);
request.interceptors.response.use((res) => res.data, (err) => err);

const api = {
  getCompanies(params: { search: string}):Promise<CommonResult<Company[]> & {total: number}> {
    return request.get('/company/list', { params });
  },
  registerEmailCode(params: {email: string}):Promise<CommonResult> {
    return request.get('/users/getCode', { params });
  },
  getCompanyDetail(params: { id: string }):Promise<CommonResult<CompanyDetail[]>> {
    return request.get('/company/detail', { params });
  },
  toLogin(data:{email:string, password:string}):Promise<CommonResult<UserInfo>> {
    return request.post('/users/login', data);
  },
  toRegister(data: { email: string, code: string, password: string }):Promise<CommonResult> {
    return request.post('/users/register', data);
  },
  getIntro():Promise<CommonResult<string>> {
    return request.get('/users/intro');
  },
  addCompany(
    data: { name: string, comment: string, score: string },
  ): Promise<CommonResult> {
    return request.post('/company/add', data);
  },
  addComment(
    data: { companyId: string, comment: string, score: string, pay: string },
  ): Promise<CommonResult> {
    return request.post('/company/add-comment', data);
  },
};

export default api;

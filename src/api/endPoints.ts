import type { IFormData } from '../pages/login/login';
import api from './axios';

// --- Auth ---
export const loginAPI = (credentials: IFormData) =>
  api.post('/auth/login', { ...credentials, expiresInMins: 60 });

export const getUserAPI = () =>
  api.get(`/auth/me`, { headers: {} }); // dummyjson /auth/me returns current user

// --- Products ---
export const fetchProductsAPI = ({ limit = 40, skip = 0, search = '', category = '' }) => {
  if (search) return api.get(`/products/search?q=${search}&limit=${limit}&skip=${skip}`);
  if (category) return api.get(`/products/category/${category}?limit=${limit}&skip=${skip}`);
  return api.get(`/products?limit=${limit}&skip=${skip}`);
};

export const fetchProductByIdAPI = (id: string) => api.get(`/products/${id}`);

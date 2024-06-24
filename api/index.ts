import axios from 'axios';

import { Product } from '@/interfaces/product';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

// 상품 목록을 가져오는 API
const fetchProducts = () => {
  return instance.get<Product[]>('/products');
};

const fetchProductById = (id: string) => {
  return instance.get<Product>(`/products/${id}`);
};

const createCardItem = ({ id, imageUrl, name, price }: Product) => {
  return instance.post('/carts', {
    id,
    imageUrl,
    name,
    price,
  });
};

// 장바구니 목록을 가져오는 API
const fetchCarts = () => {
  return instance.get<Product[]>('/carts');
};

// 특정 id의 장바구니 목록을 삭제하는 API
const removeCartItem = (id: string) => {
  return instance.delete(`/carts/${id}`);
};

export {
  instance,
  fetchProducts,
  fetchProductById,
  createCardItem,
  fetchCarts,
  removeCartItem,
};

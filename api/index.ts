import axios from 'axios';

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

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

export { instance, fetchProducts, fetchProductById };

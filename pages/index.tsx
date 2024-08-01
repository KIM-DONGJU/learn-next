import { useState } from 'react';

import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';

function Counter() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <ProductHeader title='타이틀' />
      <ProductList />
    </div>
  );
}

function ProductPage() {
  return <Counter />;
}

/**
 * 1. 상품 목록 페이지 '/'
 * 2. 상품 상세 페이지 - '/products/:productId'
 * 3. 장바구니 페이지 - '/carts'
 *
 */

export default ProductPage;

import { useState } from 'react';

import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <p data-cy="counter">{ counter }</p>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </div>
  );
}

function ProductPage() {
  return (
    <div>
      <ProductHeader title="상품 목록 페이지" />
      <ProductList />
    </div>
  );
}

/**
 * 1. 상품 목록 페이지 '/'
 * 2. 상품 상세 페이지 - '/products/:productId'
 * 3. 장바구니 페이지 - '/carts'
 *
 */

export default Counter;

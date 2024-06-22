import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './ProductList.module.css';

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  // 한 번만 실행될 때 빈 배열을 두 번째 인자로 넘김, 이를 dependency array라고 함
  useEffect(() => {
    axios.get('http://localhost:4000/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <ul>
      {products.map(product => {
        return (
          <li key={product.id} className={styles.item}>
            <div>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={250}
              />
            </div>
            <div>{product.name}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;

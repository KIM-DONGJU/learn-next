import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { fetchProducts } from '@/api';
import { Product } from '@/interfaces/product';
import styles from './ProductList.module.css';

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  // 한 번만 실행될 때 빈 배열을 두 번째 인자로 넘김, 이를 dependency array라고 함
  useEffect(() => {
    fetchProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <ul>
      {products.map(product => {
        return (
          <li key={product.id} className={styles.item}>
            <Link href={`/products/${product.id}`}>
              <div>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={250}
                />
              </div>
              <div>{product.name}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;

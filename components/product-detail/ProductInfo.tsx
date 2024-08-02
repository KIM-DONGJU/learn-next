import Image from 'next/image';
import { useRouter } from 'next/router';

import { createCardItem } from '@/api';
import { Product } from '@/interfaces/product';
import styles from './ProductInfo.module.css';

export const ALERT_MESSAGE = '장바구니에 담김';

interface ProductInfoProps {
  productDetail: Product;
}

function ProductInfo({ productDetail }: ProductInfoProps) {
  const router = useRouter();
  const { name, price, imageUrl } = productDetail;

  const addCard = async () => {
    // 1. 장바구니에 아이템을 담는 API 호출
    // 2. 장바구니 페이지로 이동
    const response = await createCardItem(productDetail);
    alert(ALERT_MESSAGE);
    router.push('/cart');
  };

  return (
    <div data-cy="product-info" className={styles.container}>
      <div>
        <Image data-cy="product-image" src={imageUrl} alt={name} width={300} height={250} />
      </div>
      <div>
        <p data-cy="product-name">{name}</p>
        <p data-cy="product-price">{price}</p>
        <button data-cy="add-cart-button" onClick={addCard}>장바구니 담기</button>
      </div>
    </div>
  );
}

export default ProductInfo;

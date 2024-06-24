import Image from 'next/image';

import { removeCartItem } from '@/api';
import { Product } from '@/interfaces/product';

import styles from './CartList.module.css';
import { useRouter } from 'next/router';

interface CartListProps {
  carts: Product[];
}

function CartList({ carts }: CartListProps) {
  const router = useRouter();

  const totalPrice = carts.reduce((acc, cur) => {
    return acc + parseFloat(cur.price);
  }, 0);

  const removeCart = async (id: string) => {
    // 1. 삭제 api 호출
    // 2. 상품 목록 갱신
    const { data } = await removeCartItem(id);
    alert(`${data.name} 상품이 삭제되었습니다.`);
    router.replace(router.asPath);
  };

  return (
    <>
      <div>
        <ul>
          {carts.map(cart => {
            return (
              <li key={cart.id} className={styles.item}>
                <div>
                  <Image
                    src={cart.imageUrl}
                    alt={cart.name}
                    width={75}
                    height={75}
                  />
                </div>
                <div>
                  <div>{cart.name}</div>
                  <div>{cart.price}</div>
                  <button onClick={() => removeCart(cart.id)}>삭제하기</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>총 가격: {totalPrice}</p>
        <p>총 수량: {carts.length}</p>
      </div>
    </>
  );
}

export default CartList;

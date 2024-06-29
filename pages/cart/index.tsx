import { fetchCarts } from '@/api';
import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';
import { InferGetServerSidePropsType } from 'next';

function CardPage({
  carts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <CartHeader />
      <CartList carts={carts} />
    </div>
  );
}

// pageProps 형태로 response를 받아옴
export async function getServerSideProps() {
  const { data } = await fetchCarts();

  return {
    props: {
      carts: data,
    },
  };
}

export default CardPage;

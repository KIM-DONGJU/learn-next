import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import { InferGetServerSidePropsType } from 'next';

interface Context {
  params: {
    productId: string;
  };
}

export async function getServerSideProps(context: Context) {
  const { productId } = context.params;
  const response = await fetchProductById(productId);

  return {
    props: {
      message: '서버에서 보내준 메시지',
      productInfo: response.data,
    },
  };
}

// 페이지 컴포넌트
function ProductDetailPage({
  message,
  productInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const headerTitle = '상품 상세 페이지';

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <div>ProductDetailPage {message} </div>
      <p>
        {productInfo.name} {productInfo.price}
      </p>
    </div>
  );
}

export default ProductDetailPage;

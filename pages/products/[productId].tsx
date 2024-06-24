import { InferGetServerSidePropsType } from 'next';

import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';

interface Context {
  params: {
    productId: string;
  };
}

export async function getServerSideProps(context: Context) {
  const { productId } = context.params;
  const { data } = await fetchProductById(productId);

  return {
    props: {
      productDetail: data,
    },
  };
}

// 페이지 컴포넌트
function ProductDetailPage({
  productDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const headerTitle = '상품 상세 페이지';

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <ProductInfo productDetail={productDetail} />
    </div>
  );
}

export default ProductDetailPage;

interface ProductHeaderProps {
  title: string;
}

function ProductHeader({ title }: ProductHeaderProps) {
  return <h1>{title}</h1>;
}

export default ProductHeader;

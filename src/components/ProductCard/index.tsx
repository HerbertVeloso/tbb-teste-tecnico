import { AiOutlinePlus } from 'react-icons/ai';
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../types/Product';
import { Button, Image, Title, Wrapper } from './styles';

type ProductProps = {
  product: Product;
}

export function ProductCard({ product }: ProductProps) {
  const { onOpenProductModal } = useProducts();

  return (
    <Wrapper>
      <Image
        src={product.images[0].asset.url}
        alt={product.images[0].alt}
      />
      <Title>{product.name}</Title>
      <Button
        type='button'
        onClick={() => onOpenProductModal(product)}
      >
        <AiOutlinePlus />
        <span>
          Más información
        </span>
      </Button>
    </Wrapper>
  );
}

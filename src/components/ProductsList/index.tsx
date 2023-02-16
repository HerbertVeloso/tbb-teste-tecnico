import { useProducts } from '../../hooks/useProducts';
import { NotFound } from '../NotFound';
import { ProductCard } from '../ProductCard';
import { Container, Summary, Wrapper } from './styles';

export function ProductsList() {
  const { products } = useProducts();

  return (
    <Wrapper>
      <Summary>
        {products.length}
        {products.length === 1 ? ' producto encontrado' : ' productos encontrados'}
      </Summary>

      <Container>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </Container>

      {products.length === 0 && (
        <NotFound />
      )}
    </Wrapper>
  );
}

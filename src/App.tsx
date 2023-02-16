import styled from 'styled-components';
import { Header } from './components/Header';
import { ProductModal } from './components/ProductModal';
import { ProductsList } from './components/ProductsList';
import { SearchFilters } from './components/SearchFilters';
import { SearchInput } from './components/SearchInput';
import { ProductsProvider } from './contexts/ProductsContext';
import { device } from './utils/devicesMediaQueries';

export function App() {
  return (
    <ProductsProvider>
      <Header />

      <Main>
        <SearchInput />
        <SearchFilters />
        <ProductsList />
      </Main>

      <ProductModal />
    </ProductsProvider>
  );
}
const Main = styled.main`
  padding: 16px;

  @media ${device.lg} {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 32px;
    display: grid;
    grid-template-columns: 220px 1fr;
    align-items: flex-start;
    gap: 32px;
  }
`;


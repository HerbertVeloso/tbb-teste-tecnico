import { CiSearch } from 'react-icons/ci';
import { useProducts } from '../../hooks/useProducts';
import { Input, Wrapper } from './styles';

export function SearchInput() {
  const { searchTerm, onChangeSearchTerm } = useProducts();

  return (
    <Wrapper
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        value={searchTerm}
        onChange={onChangeSearchTerm}
        placeholder='Escribe lo que buscas'
      />
      <CiSearch />
    </Wrapper>
  );
}

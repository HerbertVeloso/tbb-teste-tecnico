import { BiErrorCircle } from 'react-icons/bi';
import { Wrapper } from './styles';

export function NotFound() {
  return (
    <Wrapper>
      <BiErrorCircle />
      <p>No se encontraron productos</p>
    </Wrapper>
  );
}

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import { useProducts } from '../../hooks/useProducts';
import { FilterItem } from '../FilterItem';
import { Button, FiltersHeader, List, Title, Wrapper } from './styles';

export function SearchFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, searchCategories } = useProducts();

  return (
    <Wrapper>
      <FiltersHeader>
        <Title>
          Filtros
          {searchCategories.length > 0 && (
            <span>({searchCategories.length})</span>
          )}
        </Title>
        <Button
          onClick={() => setIsOpen((prevState) => !prevState)}
          isOpen={isOpen}
        >
          {isOpen ? <AiOutlineClose /> : <GoSettings />}
        </Button>
      </FiltersHeader>
      <List
        isOpen={isOpen}
      >
        {categories.map((category) => (
          <FilterItem
            key={category._id}
            category={category}
          />
        ))}
      </List>
    </Wrapper>
  );
}

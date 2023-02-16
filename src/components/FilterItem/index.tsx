import { useProducts } from '../../hooks/useProducts';
import { Category } from '../../types/Category';
import { Checkbox, Label, Wrapper } from './styles';

type FilterItemProps = {
  category: Category;
}
export function FilterItem({ category }: FilterItemProps) {
  const { onChangeSearchCategories, getAmountProductsInCategory, searchCategories } = useProducts();

  return (
    <Wrapper>
      <Checkbox
        type='checkbox'
        checked={searchCategories.includes(category._id)}
        onChange={onChangeSearchCategories}
        value={category._id}
        id={category._id}
      />
      <Label
        htmlFor={category._id}
      >
        {category.name}
        <span>
          ({getAmountProductsInCategory(category._id)})
        </span>
      </Label>
    </Wrapper>
  );
}

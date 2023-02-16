import { Category } from '../types/Category';
import ProductsRepository from './ProductsRepository';

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    const products = ProductsRepository.findAll();
    const categoriesUnformattedUnfiltered: string[] = products.map(product => JSON.stringify(product.category));
    const categoriesUnformatted: string[] = [...new Set(categoriesUnformattedUnfiltered)];

    this.categories = categoriesUnformatted.map(item => JSON.parse(item));
  }

  findAll(): Category[] {
    return this.categories;
  }
}

export default new CategoriesRepository();

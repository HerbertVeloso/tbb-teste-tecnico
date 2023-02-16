import productList from '../mocks/products.json' assert { type: 'json' };
import { Product } from '../types/Product';

class ProductsRepository {
  private products: Product[];

  constructor() {
    this.products = productList.data.nodes;
  }

  findAll(): Product[] {
    return this.products;
  }
}

export default new ProductsRepository();

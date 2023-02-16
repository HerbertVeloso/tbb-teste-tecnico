import { Category } from './Category';

type Image = {
  alt: string;
  asset: {
    url: string;
  }
}

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  images: Image[];
  category: Category;
}

import { ChangeEvent, createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import CategoriesRepository from '../repositories/CategoriesRepository';
import ProductsRepository from '../repositories/ProductsRepository';
import { Category } from '../types/Category';
import { Product } from '../types/Product';

type ProductsContextData = {
  products: Product[];
  categories: Category[];
  searchTerm: string;
  searchCategories: string[];
  modalProduct: Product;
  modalIsVisible: boolean;
  onChangeSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSearchCategories: (event: ChangeEvent<HTMLInputElement>) => void;
  onOpenProductModal: (product: Product) => void;
  onCloseProductModal: () => void;
  getAmountProductsInCategory: (idCategory: string) => number;
}

export const ProductsContext = createContext({} as ProductsContextData);

type ProductsProviderProps = {
  children: ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategories, setSearchCategories] = useState<string[]>([]);
  const [modalProduct, setModalProduct] = useState<Product>({} as Product);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  useEffect(() => {
    setProducts(ProductsRepository.findAll());
    setCategories(CategoriesRepository.findAll());
  }, []);

  const handleChangeSearchTerm = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleChangeSearchCategories = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;

    if (input.checked) {
      return setSearchCategories((prevState) => [...new Set(prevState.concat(input.value))]);
    }

    setSearchCategories((prevState) => prevState.filter((item) => item !== input.value));
  }, []);

  const handleOpenProductModal = useCallback((product: Product) => {
    setModalProduct(product);
    setModalIsVisible(true);
  }, []);

  const handleCloseProductModal = useCallback(() => {
    setModalProduct({} as Product);
    setModalIsVisible(false);
  }, []);

  const getAmountProductsInCategory = useCallback((idCategory: string) => {
    const productsInCategory = products.filter((product) => {
      const productIsInCategory = product.category._id === idCategory;
      const productIsInSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

      return productIsInCategory && productIsInSearch;
    });

    return productsInCategory.length;
  }, [products, searchTerm]);

  const filteredProducts = useMemo(() => {
    const productsFilteredByCategory = products.filter((product) => {
      if (searchCategories.length === 0) {
        return true;
      }
      return searchCategories.includes(product.category._id);
    });

    return productsFilteredByCategory.filter((product) => (
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [products, searchTerm, searchCategories]);

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        categories,
        searchTerm,
        searchCategories,
        modalProduct,
        modalIsVisible,
        onChangeSearchTerm: handleChangeSearchTerm,
        onChangeSearchCategories: handleChangeSearchCategories,
        onOpenProductModal: handleOpenProductModal,
        onCloseProductModal: handleCloseProductModal,
        getAmountProductsInCategory
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

import { ReactElement, createContext, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

export interface ProductType {
  imgUrl: string;
  name: string;
  price: number;
  _id: string;
}

const initState: ProductType[] = [];

export interface UseProductsContextType {
  products: ProductType[];
  isLoading: boolean;
  fetchError: AxiosError | null;
}

const initContextState: UseProductsContextType = {
  products: [],
  isLoading: true,
  fetchError: null
};

const ProductsContext = createContext<UseProductsContextType>(initContextState);

interface ChildrenType {
  children?: ReactElement | ReactElement[];
}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("api/v1/products");

        const products = await data.products;

        if (!products) throw Error("did not recieve data");

        setProducts(products);

        setFetchError(null);
      } catch (error: any) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, isLoading, fetchError }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;

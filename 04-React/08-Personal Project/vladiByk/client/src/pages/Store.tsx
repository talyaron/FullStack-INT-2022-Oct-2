import Cart from "../components/Store/Cart";
import ProductList from "../components/Store/ProductList";
import "../styles/Store.scss";
import "../styles/Button-5.scss";
import useProducts from "../hooks/useProducts";

interface StoreProps {
  viewCart: boolean;
}

const Store = ({ viewCart }: StoreProps) => {
  const { isLoading } = useProducts();

  return viewCart ? (
    <Cart />
  ) : (
    <div className="productsPage">
      <h1>Products</h1>
      {isLoading ? <p>Products loading...</p> : <ProductList />}
    </div>
  );
};

export default Store;

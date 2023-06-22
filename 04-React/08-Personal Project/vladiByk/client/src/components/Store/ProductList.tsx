import { ReactElement } from "react";
import Product from "./Product";
import { useAppSelector } from "../../hooks/reduxHook";
import { selectUser } from "../../app/userSlice";
import { selectproducts } from "../../app/productsSlice";

const ProductList = () => {
  const user = useAppSelector(selectUser);
  const { products, isLoading } = useAppSelector(selectproducts);

  const showProducts = Boolean(products.length);

  const pageContent: ReactElement | ReactElement[] = isLoading ? (
    <p>Products loading...</p>
  ) : showProducts ? (
    products.map((product, i) => {
      return <Product key={i} product={product} currentUser={user} />;
    })
  ) : (
    <p>Failed to load products</p>
  );

  const content = <main className="products">{pageContent}</main>;

  return content;
};

export default ProductList;

import { ProductType } from "../../context/ProductProvider";
import { ReducerActionType, ReducerAction } from "../../context/CartProvider";
import { ReactElement, useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartItemType, CartStateType } from "../../context/CartProvider";
import axios from "axios";
import { UserType } from "../../App";
interface ProductProps {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  cart: CartItemType[];
  currentUser: UserType | null
}

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  currentUser
}: ProductProps): ReactElement => {
  const [count, setCount] = useState(0);


  const img: string = new URL(`${product.imgUrl}`, import.meta.url).href;


  const onAddToCart = async () => {
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...product, qty: count },
    });
    if (!currentUser) return setCount(0);

    const carts: CartStateType[] = currentUser.carts;

    const findActiveCart = carts.filter((cart) => cart.isActive === true);

    const cartId = findActiveCart[0]._id;

    // update cart in DB
    await axios.patch("/api/v1/carts", {
      product,
      cartId,
      qty: count,
    });

    setCount(0);
  };

  const handleIconClick = (e: MouseEvent, sign: string) => {
    e.preventDefault();
    if (sign === "-") {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="img" />
      <div className="action">
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
        <AiOutlinePlus
          className="icon"
          onClick={(e: MouseEvent) => handleIconClick(e, "+")}
        />
        {count}
        <AiOutlineMinus
          className="icon"
          onClick={(e: MouseEvent) => handleIconClick(e, "-")}
        />
        <button className="button-5" onClick={onAddToCart}>
          Add to cart
        </button>
      </div>
    </article>
  );

  return content;
};

export default Product;

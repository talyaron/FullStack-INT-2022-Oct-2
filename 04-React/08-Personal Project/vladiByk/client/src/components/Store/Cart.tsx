import useCart from "../../hooks/useCart";
import EmptyCart from "./EmptyCart";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "../../styles/Cart.scss";
import axios from "axios";
import { CartItemType, CartStateType } from "../../context/CartProvider";
import { UserType } from "../../App";

const Cart = () => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [confirm, setConfirm] = useState(false);

  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = async () => {
    if (!currentUser) return alert("please login first");
    await axios.post("/api/v1/users/userPurchase", { userId: currentUser._id });

    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get("api/v1/users/getUser");

      const user = await data.user;

      if (!user) return;

      setCurrentUser(user);

      const carts: CartStateType[] = user.carts;

      const findActiveCart = carts.filter((cart) => cart.isActive === true);

      if (findActiveCart.length) {
        findActiveCart[0].cart.forEach((product: CartItemType) => {
          const { _id, name, price, qty, imgUrl } = product;
          dispatch({
            type: REDUCER_ACTIONS.LOAD,
            payload: { _id, name, price, qty, imgUrl },
          });
        });
      }
    };
    fetchCart();
  }, []);

  const pageContent = confirm ? (
    <h2>Thank you for your order.</h2>
  ) : totalItems === 0 ? (
    <EmptyCart />
  ) : (
    <>
      <h1>Your Cart</h1>
      <ul className="cart">
        {cart.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          ></CartItem>
        ))}
      </ul>
      <div className="cartTotal">
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice}</p>
        <button
          className="button-5"
          disabled={!totalItems}
          onClick={onSubmitOrder}
        >
          Place order
        </button>
      </div>
    </>
  );

  const content = <main className="cartPage">{pageContent}</main>;

  return content;
};

export default Cart;

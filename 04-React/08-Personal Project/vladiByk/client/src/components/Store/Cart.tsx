import EmptyCart from "./EmptyCart";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "../../styles/Cart.scss";
import axios from "axios";
import { CartItemType, CartStateType } from "../../app/cartSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHook";
import { submitCart, loadItems, selectCart } from "../../app/cartSlice";
import { selectUser } from "../../app/userSlice";

const Cart = () => {
  const [confirm, setConfirm] = useState(false);

  const cart = useAppSelector(selectCart);
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const totalItems: number = cart.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty;
  }, 0);

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    cart.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty * cartItem.price;
    }, 0)
  );

  const onSubmitOrder = async () => {
    if (!user) return alert("please login first");
    await axios.post("/api/v1/users/userPurchase", { userId: user._id });

    dispatch(submitCart());
    setConfirm(true);
  };

  useEffect(() => {
    const fetchCart = async () => {
      const carts: CartStateType[] = user.carts;

      const findActiveCart = carts.filter((cart) => cart.isActive === true);

      if (findActiveCart.length) {
        findActiveCart[0].cart.forEach((product: CartItemType) => {
          const { _id, name, price, qty, imgUrl } = product;
          dispatch(loadItems({ _id, name, price, qty, imgUrl }));
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
        {cart.cart.map((item) => (
          <CartItem key={item._id} item={item}></CartItem>
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

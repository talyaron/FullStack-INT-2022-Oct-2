import { CartItemType } from "../../app/cartSlice";
import { useAppDispatch } from "../../hooks/reduxHook";
import { removeItem } from "../../app/cartSlice";
import axios from "axios";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const img: string = new URL(`${item.imgUrl}`, import.meta.url).href;

  const lineTotal: number = item.qty * item.price;

  const onRemoveFromCart = async () => {
    await axios.delete(`/api/v1/carts/${item._id}`);
    dispatch(removeItem(item));
  };

  const content = (
    <li className="cartItem">
      <img src={img} alt={item.name} className="cart__img" />
      <div aria-label="Item name">{item.name}</div>
      <div className="itemAmount">Quantity: {item.qty}</div>
      <div className="cart__item-subtotal" aria-label="Line item subtotal">
        total:{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(lineTotal)}
      </div>
      <button
        className="button-6"
        aria-label="Remove item from cart"
        title="Remove item from cart"
        onClick={onRemoveFromCart}
      >
        Remove
      </button>
    </li>
  );
  return content;
};

export default CartItem;

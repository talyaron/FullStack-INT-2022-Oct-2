import { useContext } from "react";
import CartContext, { UseCartContextType } from "../context/CartProvider";

const useCart = (): UseCartContextType => useContext(CartContext);

export default useCart;

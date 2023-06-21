import { ReactElement, useReducer, useMemo, createContext } from "react";

export interface CartItemType {
  _id: string;
  name: string;
  price: number;
  qty: number;
  imgUrl: string;
}

export interface CartStateType {
  cart: CartItemType[];
  isActive: boolean;
  _id: string;
}

const initCartState: CartStateType = { cart: [], isActive: true, _id: "" };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
  LOAD: "LOAD",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }

      const { _id, name, price, imgUrl, qty } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item._id !== _id
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item._id === _id
      );

      const newQty: number = itemExists ? itemExists.qty + qty : qty;

      const updatedCart = [
        ...filteredCart,
        { _id, name, price, qty: newQty, imgUrl },
      ];

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }

      const { _id } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item._id !== _id
      );

      return { ...state, cart: [...filteredCart] };
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action");
      }

      const { _id, qty } = action.payload;

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item._id === _id
      );

      if (!itemExists) {
        throw new Error("Item must exist in order to update quantity");
      }

      const updatedItem: CartItemType = { ...itemExists, qty };

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item._id !== _id
      );

      return { ...state, cart: [...filteredCart, updatedItem] };
    }

    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }

    case REDUCER_ACTION_TYPE.LOAD: {
      if (!action.payload)
        throw new Error("action.payload missing in REMOVE action");

      const { _id, name, price, imgUrl, qty } = action.payload;

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item._id === _id
      );

      const updatedCart = itemExists
        ? [...state.cart]
        : [...state.cart, { _id, name, price, imgUrl, qty }];

      return { ...state, cart: updatedCart };
    }

    default:
      throw new Error("Unidentified reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty;
  }, 0);

  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty * cartItem.price;
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a._id.slice(-4));
    const itemB = Number(b._id.slice(-4));
    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

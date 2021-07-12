import React, { createContext, useReducer, useEffect } from "react";
import "./Cart.css";
import { products } from "./Products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 25600,
  totalItem: 0,
  quantity:1,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the individual items in Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the all items in Cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  // increment items in cart
  const increment = (id) => {
    return dispatch({
      type: "INCREASE_ITEM",
      payload: id,
    });
  };

  // decrement items in cart
  const decrement = (id) => {
    return dispatch({
      type: "DECREASE_ITEM",
      payload: id,
    });
  };

  // we will use the useeffect to update the data
  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
  }, [state.item]);
  return (
    <div>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <ContextCart />
      </CartContext.Provider>
    </div>
  );
};

export default Cart;

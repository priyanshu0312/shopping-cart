import React, { createContext, useReducer } from "react";
import "./Cart.css";
import { products } from "./Products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
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
      type:"CLEAR_CART"
    })
  }
  return (
    <div>
      <CartContext.Provider value={{ ...state, removeItem, clearCart }}>
        <ContextCart />
      </CartContext.Provider>
    </div>
  );
};

export default Cart;

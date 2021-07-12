import React, { useContext } from "react";
import Items from "./Items";
import "./Cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="/images/arrow.png" className="arrow-icon" />
            <h3>continue Shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="/images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count">{totalItem}</span>{" "}
            items in a shopping cart
          </p>
        </section>
      </>
    );
  }
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="/images/arrow.png" className="arrow-icon" />
          <h3>continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="/images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">{totalItem}</span> items
          in a shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return (
                  <>
                    <Items key={curItem.id} {...curItem} />
                  </>
                );
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Card Total : <span>₹{totalAmount} </span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <br />
      </section>
      <br />
    </>
  );
};

export default ContextCart;

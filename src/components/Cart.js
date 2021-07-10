import React, { useState } from "react";
import "./Cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { products } from "./Products";

const Cart = () => {
  const [item, setItem] = useState(products);
  return (
    <div>
      <header>
        <div className="continue-shopping">
          <img src="/images/arrow.png" className="arrow-icon" />
          <h3>continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="/images/cart.png" alt="cart" />
          <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">4</span> items in a
          shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return (
                  <>
                    <Items key={curItem.id} {...curItem}/>
                  </>
                );
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Card Total : <span>Rs22000</span>
          </h3>
          <button>Checkout</button>
        </div>
        <br />
      </section>
      <br />
    </div>
  );
};

export default Cart;

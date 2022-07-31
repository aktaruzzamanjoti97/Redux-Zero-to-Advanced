import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import Header from "./Header";
import "./Layout.css";
import Products from "./Products";
const Layout = () => {
  let total = 100;
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;

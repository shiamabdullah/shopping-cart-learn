import React from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.cart;

  const totalCost = cart.reduce((sum, obj) => sum + obj.price, 0);
  const tax = totalCost / 10;

  return (
    <div className="cart">
      <div class="head">
        <h2>Total Orders : {cart.length}</h2>
      </div>
      <p>Price : {totalCost}</p>
      <p>Tax : {tax}</p>
      <p>Total : {totalCost + tax}</p>
      <Button variant="success"> Place Order </Button>
    </div>
  );
};

export default Cart;

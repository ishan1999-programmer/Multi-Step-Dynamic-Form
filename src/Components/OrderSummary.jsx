import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../Features/cartSlice";

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let totalPrice = cart.reduce((acc, curr) => acc + (curr.quantity*curr.price),0);
  return (
    <div className="order_summary">
      <h1>Order Summary</h1>
      <div className="item_box_heading">
        <div className="item_heading">Item</div>
        <div className="quantity_heading">Quantity</div>
        <div className="price_heading">Price</div>
      </div>
      <ul className="items_list">
        {cart.map((val) => (
          <li className="item" key={val.id}>
            <div className="item_info">
              <p className="item_name">{val.name}</p>
              <p className="item_description">{val.description}</p>
              <div className="item_quantity_buttons">
                <button className="dec_button" onClick={() => {
                  dispatch(decreaseQuantity(val.id))
                }}>-</button>
                <p>{ val.quantity}</p>
                <button className="inc_button" onClick={() => {
                  dispatch(increaseQuantity(val.id))
                }}>+</button>
              </div>
            </div>
            <div className="item_quantity">{ val.quantity}</div>
            <div className="item_price">{(val.price*val.quantity).toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <p className="total_price">{`Total Price: ${totalPrice.toFixed(2)}`}</p>
      <div className="place_order_button_box">
        <button className="place_order" disabled= {!totalPrice} onClick={()=> navigate("/orderPlaced")}>Place Order</button>
      </div>
    </div>
  );
    
};

export default OrderSummary;



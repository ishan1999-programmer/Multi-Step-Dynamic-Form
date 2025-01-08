import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../Features/cartSlice";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  function handleChange(e, item) {
    if (e.target.checked) {
      dispatch(addItem(item));
    } else {
      dispatch(removeItem(item.id));
    }
  }

  let totalPrice = 0;
  cart.forEach((element) => {
    totalPrice = totalPrice + element.price;
  });

  return (
    <form
      className="order_summary"
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/orderPlaced");
      }}
    >
      <h1>Order Summary</h1>
      <div className="item_price_heading">
        <p className="item_heading">Item</p>
        <p className="price_heading">Price</p>
      </div>
      {items.map((val) => (
        <div className="item_price" key={val.id}>
          <div className="item_price_left">
            <input
              type="checkbox"
              onChange={(e) => handleChange(e, val)}
              checked={cart.some((cartVal) => cartVal.id === val.id)}
            />
            <div className="item_details">
              <p className="item_name">{val.name}</p>
              <p className="item_description">{val.description}</p>
            </div>
          </div>
          <div className="item_price_right">{val.price}</div>
        </div>
      ))}
      <p className="total_price">{totalPrice.toFixed(2)}</p>
      <div className="button_box">
        <button type="submit" id="submit_button" disabled={totalPrice < 1}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default OrderSummary;

const items = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    description: "Ergonomic and lightweight wireless mouse",
  },
  {
    id: 2,
    name: "Bluetooth Keyboard",
    price: 45.99,
    description: "Compact keyboard with Bluetooth connectivity",
  },
  {
    id: 3,
    name: "Gaming Headset",
    price: 89.99,
    description: "Noise-cancelling headset with surround sound",
  },
  {
    id: 4,
    name: "4K Monitor",
    price: 299.99,
    description: "Ultra HD 4K display with vivid colors",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    description: "7-in-1 USB-C hub with HDMI and USB ports",
  },
];

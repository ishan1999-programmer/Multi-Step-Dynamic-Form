import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import LoadingSpinner from "./loadingPage";

const OrderPlaced = () => {
  const name = useSelector((state) => state.userDetails.name);
  const email = useSelector((state) => state.userDetails.email);
  const number = useSelector((state) => state.userDetails.number);
  const address = useSelector((state) => state.shippingDetails.address);
  const city = useSelector((state) => state.shippingDetails.city);
  const postal_code = useSelector((state) => state.shippingDetails.postal_code);
  const cart = useSelector((state) => state.cart.cart);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  let totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="order_placed">
      <h1>Order Placed Successfully</h1>
      <div className="order_details">
        <p className="order_details_heading">Order Details:</p>
        {cart
          .filter((val) => val.quantity != 0)
          .map((val) => (
            <li className="final_item" key={val.id}>
              <p className="final_item_name">{val.name}</p>
              <p className="final_item_quantity">{`x ${val.quantity}`}</p>
              <p className="final_item_price">
                {(val.price * val.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        <p className="final_total_price">{`Total Price: ${totalPrice.toFixed(
          2
        )}`}</p>
      </div>
      <p className="user_details_heading">User Details:</p>
      <div className="final_name_box">
        <p className="final_name_heading">Name: </p>
          <p className="final_name">{ name}</p>
      </div>
      <div className="final_email_box">
        <p className="final_email_heading">Email: </p>
          <p className="final_email">{ email}</p>
      </div>
      <div className="final_number_box">
        <p className="final_number_heading">Number: </p>
          <p className="final_number">{ number}</p>
      </div>
      <div className="final_address_box">
        <p className="final_address_heading">Address: </p>
          <p className="final_address">{ address}</p>
      </div>
      <div className="final_city_box">
          <p className="final_city_heading">City: </p>
          <p className="final_city">{ city}</p>
      </div>
      <div className="final_postal_code_box">
        <p className="final_postal_code_heading">Postal Code: </p>
          <p className="final_postal_code">{ postal_code}</p>
      </div>
    </div>
  );
};

export default OrderPlaced;

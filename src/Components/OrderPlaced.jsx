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

  let totalPrice = 0;
  cart.forEach((element) => {
    totalPrice = totalPrice + element.price;
  });
  return (
    isLoading? <LoadingSpinner/>:
    <div className="order_placed">
      <h1>Order Placed Successfully</h1>
      <h2>Here are your details:</h2>
      <p>{`Name: ${name}`}</p>
      <p>{`Email: ${email}`}</p>
      <p>{`Phone Number: ${number}`}</p>
      <p>{`Address: ${address}`}</p>
      <p>{`City: ${city}`}</p>
      <p>{`Postal Code: ${postal_code}`}</p>
      <p>{`Amount to be paid: ${totalPrice.toFixed(2)}`}</p>
    </div>
  );
};

export default OrderPlaced;

import React from 'react'
import UserDetails from './Components/userDetails'
import ShippingDetails from "./Components/ShippingDetails"
import OrderSummary from "./Components/OrderSummary"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrderPlaced from './Components/OrderPlaced';


const App = () => {
  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="/" element={<UserDetails />}></Route>
          <Route path="/shippingDetails" element={<ShippingDetails />}></Route>
          <Route path="/orderSummary" element={<OrderSummary />}></Route>
          <Route path="/orderPlaced" element={<OrderPlaced />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App

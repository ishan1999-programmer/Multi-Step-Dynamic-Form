import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cartSlice";
import userDetailsReducer from "./Features/userDetailsSlice";
import shippingDetailsReducer from "./Features/shippingAddressSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        userDetails: userDetailsReducer,
        shippingDetails: shippingDetailsReducer,
    }
});

export default store;

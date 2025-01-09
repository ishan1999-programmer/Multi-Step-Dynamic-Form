import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      {
        id: 1,
        name: "Wireless Mouse",
        price: 25.99,
        description: "Ergonomic and lightweight wireless mouse",
        quantity: 0,
      },
      {
        id: 2,
        name: "Bluetooth Keyboard",
        price: 45.99,
        description: "Compact keyboard with Bluetooth connectivity",
        quantity: 0,
      },
      {
        id: 3,
        name: "Gaming Headset",
        price: 89.99,
        description: "Noise-cancelling headset with surround sound",
        quantity: 0,
      },
      {
        id: 4,
        name: "4K Monitor",
        price: 299.99,
        description: "Ultra HD 4K display with vivid colors",
        quantity: 0,
      },
      {
        id: 5,
        name: "USB-C Hub",
        price: 39.99,
        description: "7-in-1 USB-C hub with HDMI and USB ports",
        quantity: 0,
      },
    ],
  },
  reducers: {
    increaseQuantity: (state, action) => {
      state.cart.forEach((val) => {
        if (val.id === action.payload) {
          val.quantity++;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state.cart.forEach((val) => {
        if (val.id === action.payload && val.quantity>0) {
          val.quantity--;
        }
      });
    },
  },
});

export const {increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
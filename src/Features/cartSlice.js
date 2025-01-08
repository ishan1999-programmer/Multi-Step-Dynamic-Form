import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((val) => val.id != action.payload);
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
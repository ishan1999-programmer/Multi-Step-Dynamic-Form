import { createSlice } from "@reduxjs/toolkit";

const shippingDetailsSlice = createSlice({
  name: "shippingDetails",
  initialState: {
    address: "",
    city: "",
    postal_code: "",
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setPostalCode: (state, action) => {
      state.postal_code = action.payload;
    },
  },
});

export const { setAddress, setCity, setPostalCode } = shippingDetailsSlice.actions;
export default shippingDetailsSlice.reducer;

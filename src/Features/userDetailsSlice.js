import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        name: "",
        email: "",
        number: ""
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setNumber: (state, action) => {
            state.number = action.payload;
        }
    }
});

export const { setName, setEmail, setNumber } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // initial value of the cart
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // addItem is action and the corresponding value is the reducer
      // state is the initial state (above one)
      // action is the data which is coming in

      state.items.push(action.payload);
      // reducer functions do not return anything
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

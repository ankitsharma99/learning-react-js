import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// store contains slices
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

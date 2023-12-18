import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import appReducer from "./appSlice"

const appStore = configureStore({
    reducer: {
        cart : cartReducer,
        app : appReducer,
    }
});

export default appStore;

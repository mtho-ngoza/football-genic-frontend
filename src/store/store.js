import {configureStore} from "@reduxjs/toolkit";
import {errorReducer} from "./reducers/errorReducer.js";
import {cartReducer} from "./reducers/cartReducer.js";
import {productReducer} from "./reducers/productReducer.js";

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = {
    carts: {cart: cartItems},
}

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducer,
    },
    preloadedState: initialState,
});

export default store;
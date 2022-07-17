import { configureStore } from "@reduxjs/toolkit";

import productModalReducer from "../redux/product-modal/productModalSlide";

import cartItemsReducer from "../redux/shopping-cart/cartItemsSlide";

export const store = configureStore({
  reducer: {
    productModal: productModalReducer,
    cartItems: cartItemsReducer,
  },
});

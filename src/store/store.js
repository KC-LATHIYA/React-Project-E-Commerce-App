import { configureStore } from "@reduxjs/toolkit/react";
import productslice from "./productslice"
import cartslice from "./cartslice"
import searchslice from "./searchslice"

const store = configureStore({
    reducer: {
        product: productslice,
        cart: cartslice,
        search: searchslice
    }
})

export default store
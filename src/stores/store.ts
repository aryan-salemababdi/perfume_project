import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import products from "./slices/productsSlice/productsSlice";
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({

    reducer: {
        products: products,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)


});

export default store;
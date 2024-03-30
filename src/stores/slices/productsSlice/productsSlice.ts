import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "./functions";

interface ProductItem {
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number
    }[];
}

interface ProductsState {
    selectedItems: ProductItem[];
    totalPrice: number;
    productCounter: number;
    checkout: boolean;
}

const initialState: ProductsState = {
    selectedItems: [],
    totalPrice: 0,
    productCounter: 0,
    checkout: false
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductItem>) => {
            const item = action.payload;
            const existingItem = state.selectedItems.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.selectedItems.push({ ...item, quantity: 1 });
            }
            state.totalPrice = sumPrice(state.selectedItems);
            state.productCounter = sumQuantity(state.selectedItems);
            state.checkout = false;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.selectedItems = state.selectedItems.filter(item => item.id !== action.payload);
            state.totalPrice = sumPrice(state.selectedItems);
            state.productCounter = sumQuantity(state.selectedItems);
        },
        increase: (state, action: PayloadAction<string>) => {
            const item = state.selectedItems.find(i => i.id === action.payload);
            if (item) {
                item.quantity++;
                state.totalPrice = sumPrice(state.selectedItems);
                state.productCounter = sumQuantity(state.selectedItems);
            }
        },
        decrease: (state, action: PayloadAction<string>) => {
            const item = state.selectedItems.find(i => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
                state.totalPrice = sumPrice(state.selectedItems);
                state.productCounter = sumQuantity(state.selectedItems);
            }
        },
        checkout: (state) => {
            state.selectedItems = [];
            state.checkout = true;
            state.totalPrice = 0;
            state.productCounter = 0;
        }
    }
});

export const {
    addItem,
    removeItem,
    increase,
    decrease,
    checkout
} = productsSlice.actions;

export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";



interface product {
    productCounter: number;
    totalPrice: number;
};


const initialState: selectedS = {
    productCounter: 0,
    totalPrice: 0.00
}


const products = createSlice({
    name: "productCounter",
    initialState,
    reducers: {
        increseProduct: (state) => {
            state.productCounter+=1;
        },
        decreaseProduct: (state) => {
            state.productCounter-=1;
        }

    }
})

export default products.reducer;
export const { increseProduct, decreaseProduct } = products.actions;
export const products = (store: any) => store.selectPage.selected;
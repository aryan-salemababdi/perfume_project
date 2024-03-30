"use client"
import { NextPage } from 'next';
import React, { useState } from 'react';
import Cart from '@/components/Atom/Cart/Cart';

export interface ICartPage {
    products: {
        id: number;
        title: string;
        price: string;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number
        }
    }[];
    onPayment?: (cash: string, submit: boolean) => void;
    onSubmitClicked?: (cash: string, submit: boolean) => void;
}

const CartPage: NextPage<ICartPage> = ({ products }) => {

    const [submitProducts, setSubmitProducts] = useState<boolean>(false);
    const [resultPrice, setResultPrice] = useState<string>("0")

    return (
        <Cart
            products={products}
            onPayment={(cash, submit) => {
                setResultPrice(cash)
                setSubmitProducts(submit)
            }}
        />
    )
}

export default CartPage;
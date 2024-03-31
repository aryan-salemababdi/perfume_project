"use client"
import { NextPage } from 'next';
import React, { useState } from 'react';
import Cart from '@/components/Atom/Cart/Cart';
import CheckoutPage from '../Checkout/CheckoutPage';

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
    const [lastPrice, setlastPrice] = useState<string>("0")

    return (
        <>
            {
                submitProducts ? (
                    <CheckoutPage lastPrice={lastPrice} />
                )
                    :
                    (
                        <Cart
                            products={products}
                            onPayment={(cash, submit) => {
                                setlastPrice(cash)
                                setSubmitProducts(submit)
                            }}
                        />
                    )
            }
        </>
    )
}

export default CartPage;
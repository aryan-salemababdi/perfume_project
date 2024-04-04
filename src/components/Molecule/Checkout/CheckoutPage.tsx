import Checkout from "@/components/Atom/Checkout/Checkout";
import { NextPage } from "next";

export interface ICheckout {
  lastPrice: string;
}

const CheckoutPage:NextPage<ICheckout> = ({lastPrice}) => {
  return (
    <>
      <Checkout lastPrice={lastPrice}/>
    </>
  )
}

export default CheckoutPage;
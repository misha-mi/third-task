import "./checkout.sass";
import { IChequePage } from "./type";
import { TProduct } from "@/types";
import { Metadata } from "next";

import Cheque from "@/components/ui/cheque/cheque";
import Title from "@/components/ui/title/title";
import PrivateRoute from "@/components/HOC/private-route";
import ReduxProvider from "@/components/HOC/provider";
import PurchaseButton from "@/components/ui/purchase-button/purchase-button";

import getProducts from "@/services/get-products";

export const metadata: Metadata = {
  title: "GScore | Buy"
}

export async function generateStaticParams() {
  const subscriptions = await getProducts();

  return subscriptions.map((subscription: TProduct) => ({
    subscriptionId: String(subscription.id)
  }))
}

const Checkout = async ({ params: { subscriptionId } }: IChequePage) => {

  const subscription: TProduct = (await getProducts())[+subscriptionId - 1];

  return (
    <PrivateRoute destinationPath={`/authorization/${subscriptionId}`}>
      <div className="checkout">

        <Title titleText="Checkout" />

        <div className="checkout__cheque">
          <Cheque subscription={{ name: subscription.name, price: subscription.prices[0].price }} basket={true} />
        </div>

        <div className="checkout__total">
          <p className="checkout__key">Total:</p>
          <p className="checkout__value">
            ${subscription.prices[0].price}
          </p>
        </div>

        <div className="checkout__button">
          <ReduxProvider>
            <PurchaseButton subscriptionId={+subscriptionId} />
          </ReduxProvider>
        </div>

      </div>
    </PrivateRoute>
  )
}

export default Checkout;
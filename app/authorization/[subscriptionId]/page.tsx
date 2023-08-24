import "./checkout.sass";
import { TSubscription, IChequePage } from "./type";

import Cheque from "@/components/ui/cheque/cheque";
import Title from "@/components/ui/title/title";
import PrivateRoute from "@/components/HOC/private-route";
import ReduxProvider from "@/components/HOC/provider";
import PurchaseButton from "@/components/ui/purchase-button/purchase-button";

import getProducts from "@/services/get-products";

export async function generateStaticParams() {
  const subscriptions = await getProducts();

  return subscriptions.map((subscription: TSubscription) => ({
    subscriptionId: String(subscription.id)
  }))
}

const Checkout = async ({ params: { subscriptionId } }: IChequePage) => {

  const subscription: TSubscription = (await getProducts())[+subscriptionId - 1];

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
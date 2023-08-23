import "./checkout.sass";
import { TSubscription, IChequePage } from "./type";

import Button from "@/components/ui/button/button";
import Cheque from "@/components/ui/cheque/cheque";
import Title from "@/components/ui/title/title";
import Link from "next/link";

import getSubscriptions from "@/services/getSubscriptions";
import PrivateRoute from "@/components/HOC/private-route";

export async function generateStaticParams() {
  const subscriptions = await getSubscriptions();

  return subscriptions.map((subscription: TSubscription) => ({
    checkoutId: String(subscription.id)
  }))
}

const Checkout = async ({ params: { checkoutId } }: IChequePage) => {

  const subscription: TSubscription = (await getSubscriptions())[+checkoutId - 1];

  return (
    <PrivateRoute destinationPath={`/authorization/${checkoutId}`}>
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

        <Link href={`/${checkoutId}`} className="checkout__button">
          <Button text="Purchase" width="w200px" />
        </Link>
      </div>
    </PrivateRoute>
  )
}

export default Checkout;
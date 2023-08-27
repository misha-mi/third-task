
import "./cheque-page.sass";
import { IChequePage } from "./type";
import { TProduct } from "@/types";

import PrivateRoute from "@/components/HOC/private-route";
import Button from "@/components/ui/button/button";
import Cheque from "@/components/ui/cheque/cheque";
import Title from "@/components/ui/title/title";

import getProducts from "@/services/get-products";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const subscriptions = await getProducts();

  return subscriptions.map((subscription: TProduct) => ({
    subscriptionId: String(subscription.id)
  }))
}

const ChequePage = async ({ params: { subscriptionId } }: IChequePage) => {

  const subscription: TProduct = (await getProducts())[+subscriptionId - 1];

  return (
    <PrivateRoute destinationPath={`${subscriptionId}`}>
      <div className="cheque-page">
        <div className="container">
          <div className="cheque-page__wrapper">

            <Title titleText="Start your subscription" />

            <p className="cheque-page__subtitle">
              We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.
            </p>

            <div className="cheque-page__cheque">
              <Cheque subscription={{ name: subscription?.name, price: subscription?.prices[0].price }} />
            </div>

            <Link href={"/subscriptions"} className="cheque-page__button">
              <Button text="Go to my subscriptions" width="w100" />
            </Link>

          </div>
        </div>
      </div>
    </PrivateRoute>
  )
}

export default ChequePage;
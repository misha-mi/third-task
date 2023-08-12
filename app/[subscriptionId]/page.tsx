
import "./cheque-page.sass";
import { TSubscription, IChequePage } from "./type";

import Button from "@/components/ui/button/button";
import Cheque from "@/components/ui/cheque/cheque";
import Title from "@/components/ui/title/title";

import getSubscriptions from "@/services/getSubscriptions";

export const dynamicParams = false;

export async function generateStaticParams() {
  const subscriptions = await getSubscriptions();

  return subscriptions.map((subscription: TSubscription) => ({
    subscriptionId: String(subscription.id)
  }))
}

const ChequePage = async ({ params: { subscriptionId } }: IChequePage) => {

  const subscription: TSubscription = (await getSubscriptions())[+subscriptionId - 1];

  return (
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

          <div className="cheque-page__button">
            <Button text="Go to my subscriptions" width="w100" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ChequePage;
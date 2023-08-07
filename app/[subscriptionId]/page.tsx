
import "./cheque-page.sass";

import Button from "@/components/ui/button/button";
import Cheque from "@/components/ui/cheque/cheque";
import Title from "@/components/ui/title/title";

import getSubscriptions from "@/services/getSubscriptions";

export async function generateStaticParams() {
  const subscriptions = await getSubscriptions();

  return subscriptions.map((subscription: any) => ({
    subscriptionId: String(subscription.id)
  }))
}

const ChequePage = async ({ params: { subscriptionId } }: { params: { subscriptionId: string } }) => {

  const subscription = (await getSubscriptions())[+subscriptionId - 1];
  console.log(subscription);

  return (
    <div className="cheque-page">
      <div className="container">
        <div className="cheque-page__wrapper">

          <Title titleText="Start your subscription" />

          <p className="cheque-page__subtitle">
            We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.
          </p>

          <div className="cheque-page__cheque">
            <Cheque subscription={{ name: subscription.name, price: subscription.prices[0].price }} />
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
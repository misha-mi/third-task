
import "./checkout.sass";
import Button from "@/components/ui/button/button";
import Cheque from "@/components/ui/cheque/cheque";
import Title from "@/components/ui/title/title";

import getSubscriptions from "@/services/getSubscriptions";

export async function generateStaticParams() {
  const subscriptions = await getSubscriptions();
  return subscriptions.map((subscription: any) => ({
    checkoutId: String(subscription.id)
  }))
}

const Checkout = async ({ params: { checkoutId } }: { params: { checkoutId: string } }) => {

  const subscription = (await getSubscriptions())[+checkoutId - 1];
  console.log(subscription);
  return (
    <div className="checkout">

      <Title titleText="Checkout" />

      <div className="checkout__cheque">
        <Cheque subscription={{ name: subscription.name, price: subscription.prices[0].price }} />
      </div>

      <div className="checkout__total">
        <p className="checkout__key">Total:</p>
        <p className="checkout__value">
          ${subscription.prices[0].price}
        </p>
      </div>

      <div className="checkout__button">
        <Button text="Purchase" width="w200px" />
      </div>
    </div>
  )
}

export default Checkout;
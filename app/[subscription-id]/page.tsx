
import "./cheque-page.sass";

import Button from "@/components/ui/button/button";
import Cheque from "@/components/ui/cheque/cheque";

const ChequePage = () => {
  return (
    <div className="cheque-page">
      <div className="container">
        <div className="cheque-page__wrapper">

          <h2 className="cheque-page__title">
            Start your subscription
          </h2>
          <p className="cheque-page__subtitle">
            We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.
          </p>

          <div className="cheque-page__cheque">
            <Cheque />
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
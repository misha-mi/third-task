
import "./subscriptions.sass";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import SubscriptionCard from "@/components/layout/subscription-card/subscription-card";
import LicenseCard from "@/components/layout/license-card/license-card";

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <div className="container">
        <div className="subscriptions__header">
          <Title titleText="My subscriptions" />
          <Button text="Upgrade" />
        </div>

        <div className="subscriptions__slider">
          <div className="subscriptions__band">
            <SubscriptionCard />
            <SubscriptionCard disabled />
            <SubscriptionCard disabled />
            <SubscriptionCard disabled />
            <SubscriptionCard disabled />
          </div>

          <div className="subscriptions__controllers">
            <button className="subscriptions__controller"></button>
            <div className="subscriptions__counter">1<span>/10</span></div>
            <button className="subscriptions__controller"></button>
          </div>
        </div>

        <div className="subscriptions__licenses">
          <LicenseCard />
          <LicenseCard />
          <LicenseCard />
        </div>
      </div>
    </div>
  )
}

export default Subscriptions;

import "./subscriptions.sass";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import LicenseCard from "@/components/layout/license-card/license-card";
import Slider from "@/components/layout/slider/slider";
import SubscriptionCard from "@/components/layout/subscription-card/subscription-card";
import Link from "next/link";

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <div className="container">

        {true ? (
          <>
            <div className="subscriptions__header">
              <Title titleText="My subscriptions" />
              <Button text="Upgrade" changingStyle={true} />
            </div>

            <div className="subscriptions__slider">
              <Slider>
                <SubscriptionCard />
                <SubscriptionCard disabled={true} />
                <SubscriptionCard disabled={true} />
                <SubscriptionCard disabled={true} />
                <SubscriptionCard disabled={true} />
              </Slider>
            </div>

            <div className="subscriptions__licenses">
              <LicenseCard />
              <LicenseCard />
              <LicenseCard />
            </div>

            <div className="subscriptions_pos-right">
              <div className="subscriptions__button">
                <Button text="Confirm" width="w100" height="h72px" />
              </div>
            </div>
          </>
        ) : (
          <div className="subscriptions__empty">
            <Title titleText="My subscriptions" />

            <div className="subscriptions__no-active">
              <div className="subscriptions__circle">
                <span className="icon-close"></span>
              </div>

              <p className="subscriptions__message">No active subscriptions</p>
              <p className="subscriptions__offer">
                You can subscribe right now by <br />
                clicking on the button below
              </p>

              <Link href={"/"}>
                <Button text="Get Gscore" width="w160px" height="h72px" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Subscriptions;

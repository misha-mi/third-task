"use client";

import "./my-subscriptions.sass";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import UpgradeModal from "../upgrade-modal/upgrade-modal";
import CodesList from "../codes-list/codes-list";
import PurchasedSubscriptionsList from "../purchased-subscriptions-list/purchased-subscriptions-list";

import { useState } from "react";

const MySubscriptions = () => {

  const [isUpgrade, setIsUpgrade] = useState(false);
  const [changeableSubscription, setChangeableSubscription] = useState({ subscriptionId: 0, activeProductId: 0 });

  return (
    <>
      <div className="my-subscriptions__header">
        <Title titleText="My subscriptions" />
        <Button
          text={!isUpgrade ? "Upgrade" : "Finish"}
          changingStyle={true}
          onClick={() => setIsUpgrade(state => !state)}
        />
      </div>

      <div className="my-subscriptions__slider">
        <PurchasedSubscriptionsList
          isUpgrade={isUpgrade}
          onSetChangeableSubscription={setChangeableSubscription}
        />
      </div>

      <div className="my-subscriptions__codes-list">
        <CodesList isUpgrade={isUpgrade} />
      </div>

      <UpgradeModal
        changeableSubscription={changeableSubscription}
        onClose={() => setChangeableSubscription({ subscriptionId: 0, activeProductId: 0 })}
      />
    </>
  )
}

export default MySubscriptions;
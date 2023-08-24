"use client";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import UpgradeModal from "../upgrade-modal/upgrade-modal";
import CodesList from "../codes-list/codes-list";
import PurchasedSubscriptionsList from "../purchased-subscriptions-list/purchased-subscriptions-list";

import { useState } from "react";

const SubscriptionList = () => {

  const [isUpgrade, setIsUpgrade] = useState(false);
  const [changeableSubscription, setChangeableSubscription] = useState({ subscriptionId: 0, activeProductId: 0 });

  return (
    <>
      <div className="subscriptions__header">
        <Title titleText="My subscriptions" />
        <Button
          text="Upgrade"
          changingStyle={true}
          onClick={() => setIsUpgrade(true)}
        />
      </div>

      <PurchasedSubscriptionsList
        isUpgrade={isUpgrade}
        onSetChangeableSubscription={setChangeableSubscription}
      />

      <CodesList isUpgrade={isUpgrade} />

      <UpgradeModal
        changeableSubscription={changeableSubscription}
        onClose={() => setChangeableSubscription({ subscriptionId: 0, activeProductId: 0 })}
      />
    </>
  )
}

export default SubscriptionList;
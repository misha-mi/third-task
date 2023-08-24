"use client";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import Slider from "../slider/slider";
import SubscriptionCard from "../subscription-card/subscription-card";
import UpgradeModal from "../upgrade-modal/upgrade-modal";

import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";

import { useEffect, useState } from "react";
import { getUsersSubscriptions, getCodesById } from "@/store/ducks/subscriptions/actions";
import CodesList from "../codes-list/codes-list";
import { setSitesCount, setViewSubscriptionsId } from "@/store/ducks/subscriptions";

const SubscriptionList = () => {

  const [isUpgrade, setIsUpgrade] = useState(false);
  const [changeableSubscription, setChangeableSubscription] = useState({ subscriptionId: 0, activeProductId: 0 });

  const subscriptions = useAppSelector(store => store.subscriptions.subscriptions);
  const loading = useAppSelector(store => store.subscriptions.loading);
  const token = useAppSelector(store => store.auth.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersSubscriptions(token));
  }, [])

  const handlerViewSubscription = (newSubscriptionId: number, sitesCount: number) => {
    dispatch(getCodesById({ subscriptionId: newSubscriptionId, token }));
    dispatch(setViewSubscriptionsId(newSubscriptionId));
    dispatch(setSitesCount(sitesCount));
  }

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

      <div className="subscriptions__slider">
        <Slider>
          {
            subscriptions.map((item: any) => (
              <SubscriptionCard
                name={item.name}
                date={item.date}
                price={item.price}
                status={item.status}
                isUpgrade={isUpgrade}
                onView={() => handlerViewSubscription(item.id, item.sitesCount)}
                onChange={() => setChangeableSubscription({ subscriptionId: item.id, activeProductId: item.productId })}
                key={item.id}
              />
            ))
          }
        </Slider>
      </div>

      <CodesList isUpgrade={isUpgrade} />


      <UpgradeModal
        changeableSubscription={changeableSubscription}
        onClose={() => setChangeableSubscription({ subscriptionId: 0, activeProductId: 0 })}
      />
    </>
  )
}

export default SubscriptionList;
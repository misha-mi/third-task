"use client";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import Slider from "../slider/slider";
import LicenseCard from "../license-card/license-card";
import SubscriptionCard from "../subscription-card/subscription-card";

import { useAppDispatch, useAppSelector } from "@/store/ducks/redux-hooks";

import { useEffect } from "react";
import { getUsersSubscriptions, getCodesById } from "@/store/ducks/subscriptions";

const SubscriptionList = () => {

  const subscriptions = useAppSelector(store => store.subscriptionReducer.subscriptions);
  const codes = useAppSelector(store => store.subscriptionReducer.codes);
  const loading = useAppSelector(store => store.subscriptionReducer.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersSubscriptions("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJlbWFpbCI6Im1pc2hhQG1pc2hhLnJ1IiwiaWF0IjoxNjkxODU3MTc3fQ.5TxOsX5kbUVH1WefHWRiDwfmND2ZgwV6B9iWcJJ7xAI"));
  }, [])

  const handlerViewSubscription = (newSubscriptionId: number) => {
    dispatch(getCodesById({ subscriptionId: newSubscriptionId, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJlbWFpbCI6Im1pc2hhQG1pc2hhLnJ1IiwiaWF0IjoxNjkxODU3MTc3fQ.5TxOsX5kbUVH1WefHWRiDwfmND2ZgwV6B9iWcJJ7xAI" }));
  }

  return (
    <>
      <div className="subscriptions__header">
        <Title titleText="My subscriptions" />
        <Button text="Upgrade" changingStyle={true} />
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
                onView={() => handlerViewSubscription(item.id)}
                key={item.id}
              />
            ))
          }
        </Slider>
      </div>

      <div className="subscriptions__licenses">
        {
          codes.map((item: any) => (
            <LicenseCard
              code={item.code}
              origin={item.origin}
              status={item.status}
              key={item.id}
            />
          ))
        }
      </div>

      <div className="subscriptions_pos-right">
        <div className="subscriptions__button">
          <Button text="Confirm" width="w100" height="h72px" />
        </div>
      </div>
    </>
  )
}

export default SubscriptionList;
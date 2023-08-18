"use client";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import Slider from "../slider/slider";
import LicenseCard from "../license-card/license-card";
import SubscriptionCard from "../subscription-card/subscription-card";

import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";

import { useEffect, useState } from "react";
import { getUsersSubscriptions, getCodesById, activateCode } from "@/store/ducks/subscriptions/actions";

const SubscriptionList = () => {

  const [upgrade, setUpgrade] = useState(false);

  const subscriptions = useAppSelector(store => store.subscriptions.subscriptions);
  const codes = useAppSelector(store => store.subscriptions.codes);
  const loading = useAppSelector(store => store.subscriptions.loading);
  const token = useAppSelector(store => store.auth.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersSubscriptions(token));
  }, [])

  const handlerViewSubscription = (newSubscriptionId: number) => {
    dispatch(getCodesById({ subscriptionId: newSubscriptionId, token }));
  }

  const handlerActivateCode = (domain: string, code: string, id: number) => {
    dispatch(activateCode({ domain, code, id }));
  }

  return (
    <>
      <div className="subscriptions__header">
        <Title titleText="My subscriptions" />
        <Button
          text="Upgrade"
          changingStyle={true}
          onClick={() => setUpgrade(true)}
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
                onView={() => handlerViewSubscription(item.id)}
                key={item.id}
              />
            ))
          }
        </Slider>
      </div>

      <div className="subscriptions__licenses">
        {
          codes.map((item: any, id: number) => (
            <LicenseCard
              code={item.code}
              origin={item.origin}
              status={item.status}
              onActivate={(domain: string, code: string) => handlerActivateCode(domain, code, id)}
              key={item.codeId}
              upgrade={upgrade}
            />
          ))
        }
      </div>

      <div className="subscriptions_pos-right">
        <div className="subscriptions__button">
          <Button
            text="Confirm"
            width="w100"
            height="h72px"
            onClick={() => setUpgrade(false)}
          />
        </div>
      </div>
    </>
  )
}

export default SubscriptionList;
import "./purchased-subscriptions-list.sass";
import { IPurchasedSubscriptionsList, THandlerChangeSubscription, THandlerViewSubscription } from "./type";
import { TSubscription } from "@/types";

import Slider from "../slider/slider";
import SubscriptionCard from "../subscription-card/subscription-card";

import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { getUsersSubscriptions, getCodesById } from "@/store/ducks/subscriptions/actions";
import { setSitesCount, setViewSubscriptionsId } from "@/store/ducks/subscriptions";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PurchasedSubscriptionsList = ({ isUpgrade, onSetChangeableSubscription }: IPurchasedSubscriptionsList) => {

  const router = useRouter();

  const dispatch = useAppDispatch();

  const subscriptions = useAppSelector(store => store.subscriptions.subscriptions);
  const token = useAppSelector(store => store.auth.token);
  const loading = useAppSelector(store => store.subscriptions.loadingSubscriptions);

  useEffect(() => {
    dispatch(getUsersSubscriptions(token))
      .then(res => {
        if (Array.isArray(res.payload)) {
          router.push("/no-subscriptions");
        }
      });
  }, [])


  const handlerViewSubscription: THandlerViewSubscription = (newSubscriptionId, sitesCount) => {
    dispatch(getCodesById({ subscriptionId: newSubscriptionId, token }));
    dispatch(setViewSubscriptionsId(newSubscriptionId));
    dispatch(setSitesCount(sitesCount));
  }

  const handlerChangeSubscription: THandlerChangeSubscription = (subscriptionId: number, activeProductId: number) => {
    onSetChangeableSubscription({ subscriptionId, activeProductId });

    dispatch(setViewSubscriptionsId(subscriptionId));
  }
  console.log(subscriptions);
  return (
    <>
      <Slider loading={loading}>
        {!loading && subscriptions.length !== 0 ? (
          subscriptions.map((item: TSubscription) => (
            <SubscriptionCard
              name={item.name}
              date={item.date}
              price={item.price}
              status={item.status}
              isUpgrade={isUpgrade}
              onView={() => handlerViewSubscription(item.id, item.sitesCount)}
              onChange={() => handlerChangeSubscription(item.id, item.productId)}
              key={item.id}
            />
          ))
        ) : (
          [
            (<div className="purchased-subscriptions-list__loading" key={1}></div>),
            (<div className="purchased-subscriptions-list__loading" key={2}></div>),
            (<div className="purchased-subscriptions-list__loading" key={3}></div>)
          ]
        )}
      </Slider>
    </>
  )
}

export default PurchasedSubscriptionsList;
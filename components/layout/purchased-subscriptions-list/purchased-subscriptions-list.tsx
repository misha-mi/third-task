import "./purchased-subscriptions-list.sass";

import Slider from "../slider/slider";
import SubscriptionCard from "../subscription-card/subscription-card";

import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";

import { useEffect } from "react";
import { getUsersSubscriptions, getCodesById } from "@/store/ducks/subscriptions/actions";
import { setSitesCount, setViewSubscriptionsId } from "@/store/ducks/subscriptions";

const PurchasedSubscriptionsList = ({ isUpgrade, onSetChangeableSubscription }: { isUpgrade: boolean, onSetChangeableSubscription: ({ subscriptionId, activeProductId }: { subscriptionId: number, activeProductId: number }) => void }) => {

  const subscriptions = useAppSelector(store => store.subscriptions.subscriptions);
  const token = useAppSelector(store => store.auth.token);
  const loading = useAppSelector(store => store.subscriptions.loadingSubscriptions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersSubscriptions(token));
  }, [])

  const handlerViewSubscription = (newSubscriptionId: number, sitesCount: number) => {
    dispatch(getCodesById({ subscriptionId: newSubscriptionId, token }));
    dispatch(setViewSubscriptionsId(newSubscriptionId));
    dispatch(setSitesCount(sitesCount));
  }

  const handlerChangeSubscriptions = (subscriptionId: number, activeProductId: number) => {
    onSetChangeableSubscription({ subscriptionId, activeProductId })
    dispatch(setViewSubscriptionsId(subscriptionId));
  }

  return (
    <>
      <Slider loading={loading}>
        {!loading ? (
          subscriptions.map((item: any) => (
            <SubscriptionCard
              name={item.name}
              date={item.date}
              price={item.price}
              status={item.status}
              isUpgrade={isUpgrade}
              onView={() => handlerViewSubscription(item.id, item.sitesCount)}
              onChange={() => handlerChangeSubscriptions(item.id, item.productId)}
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
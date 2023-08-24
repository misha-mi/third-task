
import Slider from "../slider/slider";
import SubscriptionCard from "../subscription-card/subscription-card";

import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";

import { useEffect } from "react";
import { getUsersSubscriptions, getCodesById } from "@/store/ducks/subscriptions/actions";
import { setSitesCount, setViewSubscriptionsId } from "@/store/ducks/subscriptions";

const PurchasedSubscriptionsList = ({ isUpgrade, onSetChangeableSubscription }: { isUpgrade: boolean, onSetChangeableSubscription: ({ subscriptionId, activeProductId }: { subscriptionId: number, activeProductId: number }) => void }) => {

  const subscriptions = useAppSelector(store => store.subscriptions.subscriptions);
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
            onChange={() => onSetChangeableSubscription({ subscriptionId: item.id, activeProductId: item.productId })}
            key={item.id}
          />
        ))
      }
    </Slider>
  )
}

export default PurchasedSubscriptionsList;
"use client"
import "./upgrade-modal.sass";

import Status from "@/components/ui/status/status";
import Button from "@/components/ui/button/button";

import postChangeSubscription from "@/services/post-change-subscription";
import { useEffect, useState } from "react";
import getSubscriptions from "@/services/getSubscriptions";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { getCodesById } from "@/store/ducks/subscriptions/actions";
import { setSitesCount, updateSubscription } from "@/store/ducks/subscriptions";


const UpgradeModal = ({ changeableSubscription, onClose }: {
  changeableSubscription: {
    subscriptionId: number,
    activeProductId: number
  },
  onClose: () => void
}) => {

  const [subscription, setSubscriptions] = useState<any>();

  const dispatch = useAppDispatch();
  const token = useAppSelector(store => store.auth.token);

  const handlerChangeSubscription = (productId: number) => {
    postChangeSubscription(token, productId, changeableSubscription.subscriptionId)
      .then(res => {
        if (!res.data.message) {
          dispatch(getCodesById({ subscriptionId: changeableSubscription.subscriptionId, token }));

          dispatch(updateSubscription({
            date: new Date(+res.data.currentPeriodEnd).toString(),
            id: res.data.id,
            name: subscription[res.data.productId - 1].name,
            price: subscription[res.data.productId - 1].prices[0].price,
            status: res.data.status,
            productId: res.data.productId,
            sitesCount: subscription[res.data.productId - 1].sitesCount
          }));

          dispatch(setSitesCount(subscription[res.data.productId - 1].sitesCount));

          onClose();
        }
      })
  }

  useEffect(() => {
    getSubscriptions()
      .then(res => {
        setSubscriptions(res);
      })
  }, [])

  return (
    changeableSubscription.subscriptionId ? (
      <div className="upgrade-modal">
        {
          subscription.map((item: any) => (
            <div className="upgrade-modal__subscription" key={item.id}>
              <div className="upgrade-modal__price">{item.prices[0].price}$</div>
              <div className="upgrade-modal__name">{item.name}</div>
              <div className="upgrade-modal__status">
                {item.id === changeableSubscription.activeProductId ? (
                  <Status status="active" />
                ) : (
                  <Button
                    text="Change"
                    onClick={() => handlerChangeSubscription(item.id)}
                  />
                )}
              </div>
            </div>
          ))
        }
        <div className="upgrade-modal__close" onClick={onClose}>X</div>
      </div>
    ) : null
  )
}

export default UpgradeModal;
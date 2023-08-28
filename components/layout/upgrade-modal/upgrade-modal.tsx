"use client"

import "./upgrade-modal.sass";
import CloseSVG from "@/lib/svg/close-svg";
import { IUpgradeModal, THandlerChangeSubscription } from "./type";
import { TProduct } from "@/types";

import Status from "@/components/ui/status/status";
import Button from "@/components/ui/button/button";

import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { getCodesById } from "@/store/ducks/subscriptions/actions";
import { setSitesCount, updateSubscription } from "@/store/ducks/subscriptions";

import postChangeSubscription from "@/services/post-change-subscription";
import getProducts from "@/services/get-products";

import { useEffect, useState } from "react";


const UpgradeModal = ({ changeableSubscription, onClose }: IUpgradeModal) => {

  const [subscription, setSubscriptions] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const token = useAppSelector(store => store.auth.token);

  const optionsDate: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: "numeric"
  };

  const handlerChangeSubscription: THandlerChangeSubscription = (productId) => {
    setLoading(true);

    postChangeSubscription(token, productId, changeableSubscription.subscriptionId)
      .then(res => {
        if (!res.data.message) {
          dispatch(getCodesById({ subscriptionId: changeableSubscription.subscriptionId, token }));

          dispatch(updateSubscription({
            date: new Date(+res.data.currentPeriodEnd * 1000).toLocaleString("en-US", optionsDate),
            id: res.data.id,
            name: subscription[res.data.productId - 1].name,
            price: subscription[res.data.productId - 1].prices[0].price,
            status: res.data.status,
            productId: res.data.productId,
            sitesCount: subscription[res.data.productId - 1].sitesCount
          }));

          onClose();
          setLoading(false);

          dispatch(setSitesCount(subscription[res.data.productId - 1].sitesCount));
        }
      })
  }

  useEffect(() => {
    getProducts()
      .then(res => {
        setSubscriptions(res);
      })
  }, [])

  return (
    changeableSubscription.subscriptionId ? (
      <div className="upgrade-modal">
        {
          subscription.map((item) => (
            <div className="upgrade-modal__subscription" key={item.id}>
              <div className="upgrade-modal__price">{item.prices[0].price}$</div>
              <div className="upgrade-modal__name">{item.name}</div>
              <div className="upgrade-modal__status">
                {item.id === changeableSubscription.activeProductId ? (
                  <Status status="ACTIVE" />
                ) : (
                  <Button
                    text="Change"
                    loading={loading}
                    onClick={() => handlerChangeSubscription(item.id)}
                  />
                )}
              </div>
            </div>
          ))
        }
        <div className="upgrade-modal__close" onClick={onClose}>
          <CloseSVG />
        </div>
      </div>
    ) : null
  )
}

export default UpgradeModal;
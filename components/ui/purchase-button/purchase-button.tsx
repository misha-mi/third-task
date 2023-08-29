"use client";

import { IPurchaseButton } from "./type";

import Button from "../button/button";

import postBuySubscription from "@/services/post-buy-subscription";
import { useAppSelector } from "@/store/redux-hooks";

import { useRouter } from 'next/navigation'
import { useState } from "react";
import { TStatusRequest } from "@/types";

const PurchaseButton = ({ subscriptionId }: IPurchaseButton) => {

  const [statusRequest, setStatusRequest] = useState<TStatusRequest>();

  const token = useAppSelector(store => store.auth.token);
  const router = useRouter();


  const handlerBuy = () => {
    setStatusRequest("loading");
    postBuySubscription(token, subscriptionId)
      .then(res => {
        if (!res.message) {
          router.push(`/${subscriptionId}`)
        }
      });
  }

  return (
    <Button
      text="Purchase"
      width="w200px"
      onClick={handlerBuy}
      loading={statusRequest === "loading"}
    />
  )
}

export default PurchaseButton;
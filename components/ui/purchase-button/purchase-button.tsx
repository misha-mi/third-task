"use client"

import { IPurchaseButton } from "./type";

import Button from "../button/button";

import postBuySubscription from "@/services/post-buy-subscription";
import { useAppSelector } from "@/store/redux-hooks";

import { useRouter } from 'next/navigation'
import { useState } from "react";

const PurchaseButton = ({ subscriptionId }: IPurchaseButton) => {

  const [status, setStatus] = useState<"waiting" | "loading" | "error">("waiting")

  const token = useAppSelector(store => store.auth.token);
  const router = useRouter();


  const handlerBuy = () => {
    setStatus("loading");
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
      loading={status === "loading"}
    />
  )
}

export default PurchaseButton;
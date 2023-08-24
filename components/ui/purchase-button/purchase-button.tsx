"use client"
import { useAppSelector } from "@/store/redux-hooks";

import postBuySubscription from "@/services/post-buy-subscription";
import Button from "../button/button";
import { useRouter } from 'next/navigation'
import { useState } from "react";

const PurchaseButton = ({ subscriptionId }: { subscriptionId: number }) => {

  const [status, setStatus] = useState<"waiting" | "loading" | "error">("waiting")

  const token = useAppSelector(store => store.auth.token);
  const router = useRouter();


  const handlerBuy = () => {
    setStatus("loading");
    postBuySubscription(token, subscriptionId)
      .then(res => {
        if (res.subscribe.status) {
          setStatus("waiting");
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
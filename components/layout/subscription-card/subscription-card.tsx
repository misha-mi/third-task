"use client";

import "./subscription-card.sass";
import { ISubscriptionCard } from "./type";

import Button from "@/components/ui/button/button"
import Status from "@/components/ui/status/status";

const SubscriptionCard = ({ name, date, price, status, isUpgrade, onView, onChange }: ISubscriptionCard) => {
  return (
    <article className={"subscription-card"} >
      <header className="subscription-card__header">
        <div className="subscription-card__gscore">Gscore</div>
        <Status status={status} />
      </header>

      <div className="subscription-card__divider"></div>

      <main className="subscription-card__content">
        <div className="subscription-card__subscription">
          <div className="subscription-card__name">{name}</div>
          <div className="subscription-card__price">{price}$</div>
        </div>

        <div className="subscription-card__date">valid until {date}</div>

        <div className="subscription-card__button" >
          <Button
            text="View"
            theme="color100"
            width="w120px"
            onClick={onView}
          />
          {isUpgrade ? (
            <Button
              text="Change"
              theme="color100"
              width="w120px"
              onClick={onChange}
            />
          ) : null}
        </div>
      </main>
      <div className={""}></div>
    </article>
  )
}

export default SubscriptionCard;
"use client";

import Button from "@/components/ui/button/button";
import "./license-card.sass";
import { TStatus } from "./type";

import Status from "@/components/ui/status/status";

import { useState } from "react";

const LicenseCard = () => {

  const [status, setStatus] = useState<TStatus>("hold");

  return (
    <div className="license-card">

      <div className="license-card__wrapper">
        <input type="checkbox" name="checkbox" className="license-card__checkbox" />
        <label htmlFor="checkbox"><span className="icon-done"></span></label>
      </div>

      <span></span>

      <div className="license-card__title">License code</div>
      <div className="license-card__title">Domain</div>
      <div className="license-card__title license-card_ml28px">Status</div>

      <input type="text" className="license-card__input" value="sl=ru&tl=en&texte=%D0..." />

      <div className="license-card__domain-wrapper">
        <input className="license-card__input license-card__domain" value="https://translate.google.com/?sl=rru&tl=enn&ten&tu&tl=enn&ten&te&t=%D0..." />
        {status === "inactive" ? (
          <Button text="Activate" theme="color100" width="w120px" />
        ) : null
        }
      </div>

      <div className="license-card_ml28px">
        <Status status={status} />
      </div>

    </div>
  )
}

export default LicenseCard;
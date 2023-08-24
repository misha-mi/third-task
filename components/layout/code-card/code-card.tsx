"use client";

import Button from "@/components/ui/button/button";
import "./code-card.sass";

import Status from "@/components/ui/status/status";
import { useState } from "react";

interface ILicenseCard {
  code: string,
  origin: string,
  status: string,
  onActivate: (domain: string, code: string) => void,
  upgrade: boolean,
  onCheckCode: () => void
  isChecked: boolean
}

const CodeCard = ({ code, status, origin, onActivate, upgrade, onCheckCode, isChecked }: ILicenseCard) => {
  const [domain, setDomain] = useState("");

  return (
    <div className="code-card">

      <div className="code-card__wrapper">
        <input
          type="checkbox"
          name="checkbox"
          className="code-card__checkbox"
          disabled={!upgrade}
          checked={isChecked}
          onChange={onCheckCode}
        />
        <label htmlFor="checkbox"><span className="icon-done"></span></label>
      </div>

      <span></span>

      <div className="code-card__title code-card__license">License code</div>
      <div className="code-card__title code-card__domain">Domain</div>
      <div className="code-card__title code-card_none code-card_ml28px">Status</div>

      <input type="text" className="code-card__input" value={code} />

      <div className="code-card__domain-wrapper">
        <input
          className="code-card__input code-card__domain"
          value={origin || domain}
          onInput={(e) => setDomain(e.currentTarget.value)}
        />

        {
          status.toLowerCase() === "inactive" ? (
            <div className="code-card__button">
              <Button
                text="Activate"
                theme="color100"
                width="w120px"
                disabled={domain === ""}
                onClick={() => onActivate(domain, code)}
              />
            </div>
          ) : null
        }
      </div>

      <div className="code-card_ml28px code-card__status">
        <Status status={status.toLowerCase()} />
      </div>

    </div>
  )
}

export default CodeCard;
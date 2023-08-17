"use client";

import Button from "@/components/ui/button/button";
import "./license-card.sass";

import Status from "@/components/ui/status/status";

interface ILicenseCard {
  code: string,
  origin: string,
  status: string
}

const LicenseCard = ({ code, status, origin }: ILicenseCard) => {


  return (
    <div className="license-card">

      <div className="license-card__wrapper">
        <input type="checkbox" name="checkbox" className="license-card__checkbox" />
        <label htmlFor="checkbox"><span className="icon-done"></span></label>
      </div>

      <span></span>

      <div className="license-card__title license-card__license">License code</div>
      <div className="license-card__title license-card__domain">Domain</div>
      <div className="license-card__title license-card_none license-card_ml28px">Status</div>

      <input type="text" className="license-card__input" value={code} />

      <div className="license-card__domain-wrapper">
        <input className="license-card__input license-card__domain" value={origin} />
        {status === "inactive" ? (
          <div className="license-card__button">
            <Button text="Activate" theme="color100" width="w120px" />
          </div>
        ) : null
        }
      </div>

      <div className="license-card_ml28px license-card__status">
        <Status status={status.toLowerCase()} />
      </div>

    </div>
  )
}

export default LicenseCard;
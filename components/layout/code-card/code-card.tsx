"use client";
import "./code-card.sass";
import CopySVG from "@/lib/svg/copy-svg";
import CheckSVG from "@/lib/svg/check-svg";
import { ILicenseCard, THandlerActive } from "./type";

import Button from "@/components/ui/button/button";
import Status from "@/components/ui/status/status";

import { useRef, useState } from "react";
import { useAppDispatch } from "@/store/redux-hooks";
import { activateCode } from "@/store/ducks/subscriptions/actions";


const CodeCard = ({ code, status, origin, upgrade, onCheckCode, isChecked }: ILicenseCard) => {
  const [domain, setDomain] = useState("");
  const [activateLoading, setActivateLoading] = useState(false);

  const refCode = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();


  const handlerActivateCode: THandlerActive = (domain, code) => {
    setActivateLoading(true);
    dispatch(activateCode({ domain, code }))
      .then(() => setActivateLoading(false));
  }

  const handlerCopy = () => {
    if (refCode.current) {
      refCode.current.select();
      document.execCommand("copy");
    }
  }

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
        <label htmlFor="checkbox"><CheckSVG /></label>
      </div>

      <span></span>

      <div className="code-card__title code-card__license">License code</div>
      <div className="code-card__title code-card__domain">Domain</div>
      <div className="code-card__title code-card_none code-card_ml28px">Status</div>

      <div className="code-card_position-relative">
        <input ref={refCode} type="text" className="code-card__input" value={code} readOnly />
        <CopySVG className="code-card__copy" onClick={handlerCopy} />
      </div>

      <div className="code-card__domain-wrapper">
        <input
          className="code-card__input code-card__domain"
          value={origin || domain}
          disabled={status === "HOLD"}
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
                loading={activateLoading}
                onClick={() => handlerActivateCode(domain, code)}
              />
            </div>
          ) : null
        }
      </div>

      <div className="code-card_ml28px code-card__status">
        <Status status={status} />
      </div>

    </div >
  )
}

export default CodeCard;
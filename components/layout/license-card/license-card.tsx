
import "./license-card.sass";

import Status from "@/components/ui/status/status";

const LicenseCard = () => {
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
      <div className="license-card__input">https://translate.google.com/?sl=rru&tl=enn&ten&tu&tl=enn&ten&te&t=%D0...</div>
      <div className="license-card_ml28px">
        <Status status="inactive" />
      </div>

    </div>
  )
}

export default LicenseCard;
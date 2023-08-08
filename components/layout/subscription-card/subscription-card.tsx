import "./subscription-card.sass";

import Button from "@/components/ui/button/button"
import Status from "@/components/ui/status/status";

const SubscriptionCard = () => {
  return (
    <article className="subscription-card">
      <header className="subscription-card__header">
        <div className="subscription-card__gscore">Gscore</div>
        <Status status="active" />
      </header>

      <div className="subscription-card__divider"></div>

      <main className="subscription-card__content">
        <div className="subscription-card__subscription">
          <div className="subscription-card__name">Single site license</div>
          <div className="subscription-card__price">$77</div>
        </div>

        <div className="subscription-card__date">valid until 21.10.2022</div>

        <div className="subscription-card__button">
          <Button text="View" theme="color100" width="w120px" />
        </div>
      </main>
    </article>
  )
}

export default SubscriptionCard;
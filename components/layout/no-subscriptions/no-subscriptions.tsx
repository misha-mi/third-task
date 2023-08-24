import "./no-subscriptions.sass";

import Title from "@/components/ui/title/title"
import Link from "next/link"
import Button from "@/components/ui/button/button"

const NoSubscriptions = () => {
  return (
    <div className="no-subscriptions__empty">
      <Title titleText="My subscriptions" />

      <div className="no-subscriptions__no-active">
        <div className="no-subscriptions__circle">
          <span className="icon-close"></span>
        </div>

        <p className="no-subscriptions__message">No active subscriptions</p>
        <p className="no-subscriptions__offer">
          You can subscribe right now by <br />
          clicking on the button below
        </p>

        <Link href={"/"}>
          <Button text="Get Gscore" width="w160px" height="h72px" />
        </Link>
      </div>
    </div>
  )
}

export default NoSubscriptions;
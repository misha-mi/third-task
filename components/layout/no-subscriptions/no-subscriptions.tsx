
import Title from "@/components/ui/title/title"
import Link from "next/link"
import Button from "@/components/ui/button/button"

const NoSubscriptions = () => {
  return (
    <div className="subscriptions__empty">
      <Title titleText="My subscriptions" />

      <div className="subscriptions__no-active">
        <div className="subscriptions__circle">
          <span className="icon-close"></span>
        </div>

        <p className="subscriptions__message">No active subscriptions</p>
        <p className="subscriptions__offer">
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
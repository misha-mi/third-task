import "./subscriptions.sass";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import Link from "next/link";
import SubscriptionList from "@/components/layout/subscriptions-list/subscriptions-list";
import ReduxProvider from "@/components/HOC/provider";
import PrivateRoute from "@/components/HOC/private-route";
const Subscriptions = async () => {
  return (
    <PrivateRoute destinationPath="/subscriptions">
      <div className="subscriptions">
        <div className="container">

          {true ? (
            <ReduxProvider>
              <SubscriptionList />
            </ReduxProvider>
          ) : (
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
          )}
        </div>
      </div>
    </PrivateRoute>
  )
}

export default Subscriptions;

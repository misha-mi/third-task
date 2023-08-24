import "./subscriptions.sass";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import Link from "next/link";
import SubscriptionList from "@/components/layout/subscriptions-list/subscriptions-list";
import ReduxProvider from "@/components/HOC/provider";
import PrivateRoute from "@/components/HOC/private-route";
import NoSubscriptions from "@/components/layout/no-subscriptions/no-subscriptions";
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
            <NoSubscriptions />
          )}
        </div>
      </div>
    </PrivateRoute>
  )
}

export default Subscriptions;

import "./subscriptions.sass";

import SubscriptionList from "@/components/layout/my-subscriptions/subscriptions-list";
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

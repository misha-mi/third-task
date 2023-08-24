import "./subscriptions.sass";

import MySubscriptions from "@/components/layout/my-subscriptions/my-subscriptions";
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
              <MySubscriptions />
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

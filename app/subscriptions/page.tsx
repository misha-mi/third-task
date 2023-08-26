import "./subscriptions.sass";

import MySubscriptions from "@/components/layout/my-subscriptions/my-subscriptions";
import ReduxProvider from "@/components/HOC/provider";
import PrivateRoute from "@/components/HOC/private-route";


const Subscriptions = async () => {
  return (
    <PrivateRoute destinationPath="/subscriptions">
      <div className="subscriptions">
        <div className="container">

          <ReduxProvider>
            <MySubscriptions />
          </ReduxProvider>

        </div>
      </div>
    </PrivateRoute>
  )
}

export default Subscriptions;

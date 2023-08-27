import "./subscriptions.sass";
import { Metadata } from "next";

import MySubscriptions from "@/components/layout/my-subscriptions/my-subscriptions";
import ReduxProvider from "@/components/HOC/provider";
import PrivateRoute from "@/components/HOC/private-route";

export const metadata: Metadata = {
  title: "GScore | My Subscriptions"
}

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

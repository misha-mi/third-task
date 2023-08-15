import "./subscriptions.sass";

import Title from "@/components/ui/title/title";
import Button from "@/components/ui/button/button";
import LicenseCard from "@/components/layout/license-card/license-card";
import Slider from "@/components/layout/slider/slider";
import SubscriptionCard from "@/components/layout/subscription-card/subscription-card";
import PrivateRoute from "@/components/layout/private-route/private-route";
import Link from "next/link";
import axios from "axios";

import getCode from "@/services/getCode";

const Subscriptions = async () => {

  const subscriptions = await axios<any, any>({
    method: "GET",
    url: "http://localhost:3000/api/self",
    params: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJlbWFpbCI6Im1pc2hhQG1pc2hhLnJ1IiwiaWF0IjoxNjkxODU3MTc3fQ.5TxOsX5kbUVH1WefHWRiDwfmND2ZgwV6B9iWcJJ7xAI"
    }
  }).then(res => res.data);

  const codes = await getCode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJlbWFpbCI6Im1pc2hhQG1pc2hhLnJ1IiwiaWF0IjoxNjkxODU3MTc3fQ.5TxOsX5kbUVH1WefHWRiDwfmND2ZgwV6B9iWcJJ7xAI", 268).then(res => res.data);
  return (
    <PrivateRoute>
      <div className="subscriptions">
        <div className="container">

          {true ? (
            <>
              <div className="subscriptions__header">
                <Title titleText="My subscriptions" />
                <Button text="Upgrade" changingStyle={true} />
              </div>

              <div className="subscriptions__slider">
                <Slider>
                  {
                    subscriptions.map((item: any, id: any) => (
                      <SubscriptionCard key={id} />
                    ))
                  }
                </Slider>
              </div>

              <div className="subscriptions__licenses">
                {
                  codes.map((item: any, id: any) => (
                    <LicenseCard key={id} />
                  ))
                }
              </div>

              <div className="subscriptions_pos-right">
                <div className="subscriptions__button">
                  <Button text="Confirm" width="w100" height="h72px" />
                </div>
              </div>
            </>
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

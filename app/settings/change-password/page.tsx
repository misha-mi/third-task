import ChangePasswordForm from "@/components/layout/forms/change-password-form/change-password-form";
import ReduxProvider from "@/components/HOC/provider";
import Title from "@/components/ui/title/title"
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "GScore | Change Password"
}

const Settings = () => {
  return (
    <div className="settings-page">

      <div className="settings-page__title">
        <Title titleText="Change password" type="h2" />
      </div>

      <Suspense fallback={<Loading />}>
        <ReduxProvider>
          <ChangePasswordForm />
        </ReduxProvider>
      </Suspense>

    </div>
  )
}

export default Settings;
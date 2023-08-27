import ReduxProvider from "@/components/HOC/provider";
import UserForm from "@/components/layout/forms/user-form/user-form";
import Title from "@/components/ui/title/title"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GScore | Change User Data"
}

const Settings = () => {
  return (
    <div className="settings-page">

      <div className="settings-page__title">
        <Title titleText="Settings" type="h2" />
      </div>

      <ReduxProvider>
        <UserForm />
      </ReduxProvider>
    </div>
  )
}

export default Settings;
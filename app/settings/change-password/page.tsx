import ChangePasswordForm from "@/components/layout/forms/change-password-form/change-password-form";
import ReduxProvider from "@/components/HOC/provider";
import Title from "@/components/ui/title/title"


const Settings = () => {
  return (
    <div className="settings-page">

      <div className="settings-page__title">
        <Title titleText="Change password" type="h2" />
      </div>

      <ReduxProvider>
        <ChangePasswordForm />
      </ReduxProvider>

    </div>
  )
}

export default Settings;
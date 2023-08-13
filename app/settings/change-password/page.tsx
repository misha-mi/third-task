import ChangePasswordForm from "@/components/layout/change-password-form/change-password-form";
import Title from "@/components/ui/title/title"


const Settings = () => {
  return (
    <div className="settings-page">

      <div className="settings-page__title">
        <Title titleText="Change password" type="h2" />
      </div>

      <ChangePasswordForm />

    </div>
  )
}

export default Settings;
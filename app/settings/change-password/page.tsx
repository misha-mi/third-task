import Form from "@/components/ui/form/form";
import Title from "@/components/ui/title/title"


const Settings = () => {
  return (
    <div className="settings-page">

      <div className="settings-page__title">
        <Title titleText="Change password" type="h2" />
      </div>

      <div className="settings-page__wrapper">
        <Form inputs={{ "currentPassword": "", "newPassword": "" }} buttonText="Save" />
      </div>

    </div>
  )
}

export default Settings;
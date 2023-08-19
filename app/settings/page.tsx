import ReduxProvider from "@/components/layout/provider/provider";
import UserForm from "@/components/layout/user-form/user-form";
import Title from "@/components/ui/title/title"


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
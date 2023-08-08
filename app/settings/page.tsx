import Form from "@/components/ui/form/form";
import Title from "@/components/ui/title/title"


const Settings = () => {
  return (
    <div className="settings-page">

      <div className="settings-page__title">
        <Title titleText="Settings" type="h2" />
      </div>

      <div className="settings-page__wrapper">
        <Form inputs={{ Username: "", Email: "" }} buttonText="Save" />
      </div>

    </div>
  )
}

export default Settings;
"use client"
import Form from "@/components/ui/form/form";
import patchUpdatePassword from "@/services/patchUpdatePassword";

const ChangePasswordForm = () => {

  const handlerSubmit = (data: any) => {
    patchUpdatePassword("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJlbWFpbCI6Im1pc2hhQG1pc2hhLnJ1IiwiaWF0IjoxNjkxODk1NzUxfQ.7L9J6IY2As_26Qc5O4emetntlXR6DS4a5G-0s6B3aJk", data)
  }

  return (
    <div className="settings-page__wrapper">
      <Form
        inputs={{ "currentPassword": "", "newPassword": "" }}
        buttonText="Save"
        onSubmit={handlerSubmit}
      />
    </div>
  )
}

export default ChangePasswordForm;
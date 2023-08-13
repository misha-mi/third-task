"use client";
import Form from "@/components/ui/form/form"
import getUserData from "@/services/getUserData";
import patchUserData from "@/services/patchUsersData";

import { useEffect, useState } from "react";

const UserForm = () => {

  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({
    email: "",
    username: "",
    id: 0
  });


  useEffect(() => {
    setLoading(true);
    getUserData("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJlbWFpbCI6Im1pc2hhQG1pc2hhLnJ1IiwiaWF0IjoxNjkxODk1NzUxfQ.7L9J6IY2As_26Qc5O4emetntlXR6DS4a5G-0s6B3aJk")
      .then(res => setUserData(res.data))
      .finally(() => setLoading(false));
  }, [])

  const handlerSubmit = (data: any) => {
    patchUserData("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJlbWFpbCI6Im1pc2hhQG1pc2hhLnJ1IiwiaWF0IjoxNjkxODk1NzUxfQ.7L9J6IY2As_26Qc5O4emetntlXR6DS4a5G-0s6B3aJk", data)
      .then(res => setUserData(res.data));
  }

  return (
    <div className="settings-page__wrapper">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Form
          inputs={{ username: userData.username, email: userData.email }}
          buttonText="Save"
          onSubmit={handlerSubmit}
        />
      )}
    </div>
  )
}

export default UserForm
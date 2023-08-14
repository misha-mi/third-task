"use client"

import Form from "@/components/ui/form/form";

import { useAppDispatch } from "@/store/ducks/redux-hooks";
import { setToken, setUsername } from "@/store/ducks/auth";

import postAuth from "@/services/postAuth";

const LogInForm = () => {

  const dispatch = useAppDispatch();

  const handlerSubmit = (data: { email: string, password: string }) => {
    postAuth(data).then(res => {
      dispatch(setUsername(res.response.user.username));
      dispatch(setToken(res.response.token));
    })
  }

  return (
    <Form inputs={{
      "email": "",
      "password": ""
    }}
      buttonText="Log in"
      onSubmit={handlerSubmit}
    />
  )
}

export default LogInForm;
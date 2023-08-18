"use client"

import Form from "@/components/ui/form/form";

import { useAppDispatch } from "@/store/redux-hooks";
import { setToken, setUsername } from "@/store/ducks/auth";
import { useRouter } from "next/navigation";

import postAuth from "@/services/postAuth";

const LogInForm = ({ productId }: { productId: number }) => {

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handlerSubmit = (data: { email: string, password: string }) => {
    postAuth(data).then(res => {
      if (!res.response.error) {
        dispatch(setUsername(res.response.user.username));
        dispatch(setToken(res.response.token));
        router.push(`/authorization/${productId}`);
      }
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
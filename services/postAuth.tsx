import axios from "axios";
import { redirect } from "next/navigation";

export default async function postAuth(authData: { email: string, password: string }) {
  const response = await axios({
    method: "POST",
    url: "http://localhost:3000/api/signIn",
    data: authData
  }).then(res => res.data);

  return response;
}


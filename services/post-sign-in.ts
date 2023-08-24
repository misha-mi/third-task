import axios from "axios";

export default async function postSignIn(authData: { email: string, password: string }) {
  const response = await axios({
    method: "POST",
    url: "http://localhost:3000/api/sign-in",
    data: authData
  }).then(res => res.data);

  return response;
}


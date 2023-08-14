import axios from "axios";

export default async function postSignUp(data: { username: string, password: string, email: string }) {

  const response = await axios({
    method: "POST",
    url: "http://localhost:3000/api/signUp",
    data: data
  }).then(res => res.data)

  return response;
}
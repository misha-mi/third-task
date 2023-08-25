import axios from "axios";

export default async function getUserData(token: string) {

  const response = await axios({
    method: "GET",
    url: "http://localhost:3000/api/get-user-data",
    headers: { token: token }
  });

  return response;
}
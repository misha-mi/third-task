import axios from "axios";

export default async function postBuySubscription(token: string, userData: { email: string, username: string }) {
  const response = await axios({
    method: "PATCH",
    url: "http://localhost:3000/api/updateUser",
    params: {
      token: token
    },
    data: userData
  });

  return response;
}
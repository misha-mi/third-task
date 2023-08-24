import axios from "axios";

export default async function getCodes(token: string, subscriptionID?: number) {

  const response = await axios({
    method: "GET",
    url: "http://localhost:3000/api/get-codes",
    params: {
      token: token,
      subscriptionID: subscriptionID
    }
  });

  return response;
}
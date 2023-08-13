import axios from "axios";

export default async function getCode(token: string, subscriptionID?: number) {

  const response = await axios({
    method: "GET",
    url: "http://localhost:3000/api/code-self",
    params: {
      token: token,
      subscriptionID: subscriptionID
    }
  });


  return response;
}
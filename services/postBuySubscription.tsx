import axios from "axios";

export default async function postBuySubscription(token: string, priceId: number) {
  const response = await axios({
    method: "POST",
    url: "http://localhost:3000/api/buy",
    params: {
      token: token
    },
    data: {
      priceId: priceId
    }
  }).then(res => res.data);

  return response;
}


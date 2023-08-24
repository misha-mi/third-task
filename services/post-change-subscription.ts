import axios from "axios";

export default function postChangeSubscription(token: string, productId: number, subscribeId: number) {
  return axios({
    method: "POST",
    url: "https://internship.purrweb.site/api/subscribe/change-product",
    headers: {
      "accept": "application/json",
      'Content-type': " application/json",
      "Authorization": `Bearer ${token}`
    },
    data: {
      productId,
      subscribeId
    }
  })
}


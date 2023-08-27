import axios from "axios";

export default function postChangeSubscription(token: string, productId: number, subscribeId: number) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/api/change-product",
    headers: {
      token
    },
    data: {
      productId,
      subscribeId
    }
  })
}


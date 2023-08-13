import axios from "axios";

export default async function postBuySubscription(token: string, priceId: number) {
  const response = await axios({
    method: "POST",
    url: "http://localhost:3000/api/buy",
    params: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJlbWFpbCI6Im1pc2hhQG1pc2hhLnJ1IiwiaWF0IjoxNjkxODU1NzM4fQ.0aDoOoNI4BoCt7JLapiYm7gO6pK5VGbf1-vajsjXqyM"
    },
    data: {
      priceId: 2
    }
  }).then(res => res.data);

  return response;
}


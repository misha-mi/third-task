import axios from "axios";

export default function getPurchasedSubscriptions(token: string) {
  const response = axios({
    method: "GET",
    url: "http://localhost:3000/api/get-purchased-subscriptions",
    headers: {
      token: token
    }
  });
  return response;
}
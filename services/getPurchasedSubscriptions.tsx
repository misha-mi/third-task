import axios from "axios";

export default function getPurchasedSubscriptions(token: string) {
  const response = axios<any, any>({
    method: "GET",
    url: "http://localhost:3000/api/self",
    params: {
      token: token
    }
  });
  return response;
}
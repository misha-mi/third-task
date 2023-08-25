import axios from "axios";

export default function postActivateCode(origin: string, code: string) {
  return axios({
    method: "POST",
    url: "http://localhost:3000/api/activate-code",
    headers: {
      domain: origin
    },
    data: {
      code: code
    }
  })
}


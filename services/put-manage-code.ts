import axios from "axios";

export default function putManageCode(token: string, subscribeId: number, codesIds: number[]) {
  return axios({
    method: "PUT",
    url: "https://internship.purrweb.site/api/code/manage",
    headers: {
      "accept": "application/json",
      'Content-type': " application/json",
      "Authorization": `Bearer ${token}`
    },
    data: {
      subscribeId,
      codesIds
    }
  })
}


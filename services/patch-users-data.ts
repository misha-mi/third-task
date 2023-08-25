import axios from "axios";

export default async function patchUserData(token: string, userData: { email: string, username: string }) {
  const response = await axios({
    method: "PATCH",
    url: "http://localhost:3000/api/update-user-data",
    headers: {
      token: token
    },
    data: userData
  });

  return response;
}
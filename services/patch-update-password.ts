import axios from "axios";

export default async function patchUpdatePassword(token: string, passwordData: { currentPassword: string, newPassword: string }) {
  const response = await axios({
    method: "PATCH",
    url: "http://localhost:3000/api/update-password",
    headers: {
      token: token
    },
    data: passwordData
  });

  return response;
}
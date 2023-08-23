import { ReactElement } from "react";

import axios from "axios";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

const PrivateRoute = async ({ children, destinationPath }: { children: ReactElement, destinationPath: string }) => {

  const cookiesStore = cookies();
  const token = cookiesStore.get("token");

  await axios({
    method: "GET",
    url: "http://localhost:3000/api/me",
    params: { token: token?.value || "" }
  }).then(res => {
    if (res.data.message) {
      redirect(`/authorization?destinationPath=${destinationPath}`);
    }
  });
  return children;
}

export default PrivateRoute;


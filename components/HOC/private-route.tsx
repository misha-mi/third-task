
import { IPrivateRoute } from './type';

import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

import getUserData from "@/services/get-user-data";

const PrivateRoute = async ({ children, destinationPath }: IPrivateRoute) => {

  const cookiesStore = cookies();
  const token = cookiesStore.get("token");

  await getUserData(token?.value || "")
    .then(res => {
      if (res.data.message) {
        redirect(`/authorization?destinationPath=${destinationPath}`);
      }
    });

  return children;
}

export default PrivateRoute;


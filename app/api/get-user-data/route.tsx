import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {

  const headersList = headers();
  const token = headersList.get("token");

  const user = await fetch(
    "https://internship.purrweb.site/api/users/me",
    {
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  ).then(res => res.json());

  return NextResponse.json(user);
}
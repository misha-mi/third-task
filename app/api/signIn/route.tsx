import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("https://internship.purrweb.site/api/users/sign-in", {
    method: "POST",
    headers: {
      'accept': "application/json",
      'Content-type': " application/json"
    },
    body: JSON.stringify(body)
  }).then(res => res.json())

  return NextResponse.json({ response })
}
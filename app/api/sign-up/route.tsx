import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch("https://internship.purrweb.site/api/users/sign-up", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "Content-type": " application/json"
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then(res => {
      if (typeof res.message === "string") {
        res.message = [res.message];
      }
      return res;
    });

  return NextResponse.json({ response });
}

import { NextResponse } from 'next/server';

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const token = await searchParams.get("token");

  const user = await fetch(
    `https://internship.purrweb.site/api/users/me`,
    {
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  ).then(res => res.json());

  return NextResponse.json(user);
}
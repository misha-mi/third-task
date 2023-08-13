
import { NextResponse } from 'next/server';

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const token = await searchParams.get("token");

  const products = await fetch(
    `https://internship.purrweb.site/api/subscribe/self`,
    {
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  ).then(res => res.json());
  return NextResponse.json(products);
}
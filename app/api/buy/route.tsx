import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  const data = await req.json();

  const { searchParams } = new URL(req.url);

  const token = await searchParams.get("token");

  const products = await fetch(
    `https://internship.purrweb.site/api/payments/buy`,
    {
      method: "POST",
      headers: {
        "accept": "application/json",
        'Content-type': " application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  ).then(res => res.json());

  return NextResponse.json(products);
}




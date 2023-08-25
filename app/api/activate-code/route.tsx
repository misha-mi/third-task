import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  const { searchParams } = new URL(req.url);
  const origin = await searchParams.get("origin");

  const data = await req.json();

  const products = await fetch(
    `https://internship.purrweb.site/api/code/activate`,
    {
      method: "POST",
      headers: {
        "accept": "application/json",
        'Content-type': " application/json",
        "Origin": `${origin}`
      },
      body: JSON.stringify(data)
    }
  )
    .then(res => res.json());

  return NextResponse.json(products);
}



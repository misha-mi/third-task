import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(req: Request) {

  const headersList = headers();
  const domain = headersList.get("domain");
  const data = await req.json();

  const products = await fetch(
    `https://internship.purrweb.site/api/code/activate`,
    {
      method: "POST",
      headers: {
        "accept": "application/json",
        'Content-type': " application/json",
        "Origin": `${domain}`
      },
      body: JSON.stringify(data)
    }
  )
    .then(res => res.json())
    .then(res => (!res.message ? {
      codeId: res.id,
      code: res.code,
      origin: res.origin,
      status: res.status
    } : res))

  return NextResponse.json(products);
}



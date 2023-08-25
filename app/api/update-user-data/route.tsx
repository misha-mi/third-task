import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  const data = await req.json();

  const headersList = headers();
  const token = headersList.get("token");

  const products = await fetch(
    "https://internship.purrweb.site/api/users",
    {
      method: "PATCH",
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


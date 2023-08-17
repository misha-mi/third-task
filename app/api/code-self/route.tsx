import { NextResponse } from 'next/server';

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const token = await searchParams.get("token");

  const subscriptionId = await searchParams.get("subscriptionID");

  let products = await fetch(
    `https://internship.purrweb.site/api/code/self`,
    {
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  ).then(res => res.json());

  if (subscriptionId) {
    products = products.filter((item: any) => item.subscribe.id === +subscriptionId)
  }

  products = products.map((item: any) => ({
    codeId: item.id,
    code: item.code,
    origin: item.origin || "",
    status: item.status,
  }))

  return NextResponse.json(products);
}
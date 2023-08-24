
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
  )
    .then(res => res.json())
    .then(res => ({
      firstSubscriptionsCodes: res[0].codes.map((item: any) => ({
        codeId: item.id,
        code: item.code,
        origin: item.origin || "",
        status: item.status
      })),
      subscriptions: res.map((item: any) => ({
        id: item.id,
        name: item.product.name,
        date: new Date(+item.currentPeriodEnd),
        price: item.product.prices[0].price,
        status: item.status,
        productId: item.productId,
        sitesCount: item.product.sitesCount
      }))
    }))
  return NextResponse.json(products);
}
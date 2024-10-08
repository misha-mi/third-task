import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { TGetCodes, TGetSubscriptions } from "./type";

export async function GET() {

  const headersList = headers();
  const token = headersList.get("token");

  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric"
  };

  const products = await fetch(
    "https://internship.purrweb.site/api/subscribe/self",
    {
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  )
    .then(res => res.json())
    .then(res => !res.message && res.length !== 0 ? ({
      firstSubscriptionsCodes: res[0]?.codes.map((item: TGetCodes) => ({
        codeId: item.id,
        code: item.code,
        origin: item.origin || "",
        status: item.status
      })),
      subscriptions: res.map((item: TGetSubscriptions) => ({
        id: item.id,
        name: item.product.name,
        date: new Date(+item.currentPeriodEnd * 1000).toLocaleString("en-US", optionsDate),
        price: item.product.prices[0].price,
        status: item.status,
        productId: item.productId,
        sitesCount: item.product.sitesCount
      }))
    }) : res);

  return NextResponse.json(products);
}
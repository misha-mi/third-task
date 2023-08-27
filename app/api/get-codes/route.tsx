import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { TGetCodes } from "../get-purchased-subscriptions/type";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);
  const subscriptionId = await searchParams.get("subscriptionID");

  const headersList = headers();
  const token = headersList.get("token")

  let products = await fetch(
    "https://internship.purrweb.site/api/code/self",
    {
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
  ).then(res => res.json());

  if (subscriptionId) {
    products = products.filter((item: TGetCodes) => item.subscribe.id === +subscriptionId);
  }

  products = !products.message ? products.map((item: TGetCodes) => ({
    codeId: item.id,
    code: item.code,
    origin: item.origin || "",
    status: item.status,
  })) : products;

  return NextResponse.json(products);
}
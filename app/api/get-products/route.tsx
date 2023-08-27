
import { NextResponse } from "next/server";

export async function GET() {

  const products = await fetch(
    "https://internship.purrweb.site/api/products"
  ).then(res => res.json());

  return NextResponse.json(products);
}
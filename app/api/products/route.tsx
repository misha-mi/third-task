
import { NextResponse } from 'next/server';

export async function GET(req: Request) {

  const products = await fetch(
    `${process.env.GSCORE_PATH}products`
  ).then(res => res.json());
  return NextResponse.json(products);
}
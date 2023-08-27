import { TStatus } from "@/types";

export type TGetSubscriptions = {
  id: number,
  date: number,
  status: TStatus,
  productId: number,
  currentPeriodEnd: number,
  product: {
    name: string,
    sitesCount: number
    prices: [
      {
        price: number
      }
    ]
  }
};

export type TGetCodes = {
  id: number,
  code: string,
  origin: string,
  status: TStatus,
  subscribe: {
    id: number
  }
};
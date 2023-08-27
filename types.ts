export type TCode = {
  codeId: number,
  code: string,
  origin: string,
  status: TStatus
};

export type TSubscription = {
  id: number,
  name: string,
  date: string,
  price: string,
  status: TStatus,
  productId: number,
  sitesCount: number
};

export type TPurchasedSubscriptions = {
  firstSubscriptionsCodes: TCode[],
  subscriptions: TSubscription[]
};

export type TProduct = {
  id: number,
  sitesCount: number,
  name: string,
  prices: [
    {
      price: string
    }
  ]
};

export type TStatus = "ACTIVE" | "HOLD" | "INACTIVE";
export type TCode = {
  codeId: number,
  code: string,
  origin: string,
  status: string
};

export type TSubscription = {
  id: number,
  name: string,
  date: string,
  price: number,
  status: string,
  productId: number,
  sitesCount: number
}

export type TPurchasedSubscriptions = {
  firstSubscriptionsCodes: TCode[],
  subscriptions: TSubscription[]
}
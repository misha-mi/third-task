export type TSubscription = {
  id: number,
  sitesCount: number,
  name: string,
  prices: [
    {
      id: number,
      isActive: boolean,
      productId: number,
      price: number
    }
  ]
}
export type TSubscription = {
  id: number,
  name: string,
  prices: [
    {
      price: string
    }
  ]
}

export interface IChequePage {
  params: {
    subscriptionId: string
  }
}
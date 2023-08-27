export interface IPurchasedSubscriptionsList {
  isUpgrade: boolean,
  onSetChangeableSubscription: (
    {
      subscriptionId,
      activeProductId
    }: {
      subscriptionId: number,
      activeProductId: number
    }) => void
}

export type THandlerViewSubscription = (newSubscriptionId: number, sitesCount: number) => void

export type THandlerChangeSubscription = (subscriptionId: number, activeProductId: number) => void
export interface IUpgradeModal {
  changeableSubscription: {
    subscriptionId: number,
    activeProductId: number
  },
  onClose: () => void
};

export type THandlerChangeSubscription = (productId: number) => void;
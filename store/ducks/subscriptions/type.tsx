export type TSubscription = {
  status: string,
  name: string,
  date: string,
  price: number,
  id: number,
  productId: number,
  sitesCount: number
}

export type TCode = {
  codeId: number,
  code: string,
  status: string,
  origin: string
}

export interface ISubscriptionState {
  loadingSubscriptions: boolean,
  loadingCodes: boolean,
  subscriptions: TSubscription[],
  codes: TCode[],
  viewSubscriptionsId: number,
  sitesCount: number
}

export interface IGetCodesById {
  subscriptionId: number;
  token: string;
}

export interface IActivateCode {
  domain: string,
  code: string,
  id: number
}
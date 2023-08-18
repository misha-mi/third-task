export type TSubscription = {
  status: string,
  name: string,
  date: string,
  price: number
}

export type TCode = {
  codeId: number,
  code: string,
  status: string,
  origin: string
}

export interface ISubscriptionState {
  loading: boolean,
  subscriptions: TSubscription[],
  codes: TCode[]
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
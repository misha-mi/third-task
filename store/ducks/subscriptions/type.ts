import { TCode, TSubscription } from "@/types";

export interface ISubscriptionState {
  loadingSubscriptions: boolean,
  loadingCodes: boolean,
  subscriptions: TSubscription[],
  codes: TCode[],
  viewSubscriptionsId: number,
  sitesCount: number
};

export interface IGetCodesById {
  subscriptionId: number;
  token: string;
};

export interface IActivateCode {
  domain: string,
  code: string,
};
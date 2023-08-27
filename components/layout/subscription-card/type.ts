import { TStatus } from "@/types";

export interface ISubscriptionCard {
  name: string;
  date: string;
  price: string;
  status: TStatus;
  isUpgrade: boolean
  onView: () => void;
  onChange: () => void;
}
export interface ISubscriptionCard {
  name: string;
  date: string;
  price: number;
  status: string;
  onView: () => void;
}
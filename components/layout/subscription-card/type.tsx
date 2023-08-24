export interface ISubscriptionCard {
  name: string;
  date: string;
  price: number;
  status: string;
  isUpgrade: boolean
  onView: () => void;
  onChange: () => void;
}
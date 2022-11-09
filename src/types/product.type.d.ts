export interface Product {
  createdAt: string;
  facebookId: string;
  title: string;
  description: string;
  url: string;
  locationText: string;
  latitude: number;
  longitude: number;
  formattedAmount: string;
  amount: number;
  currency: string;
  userName: string;
  photos: string[];
  size: string | null;
}

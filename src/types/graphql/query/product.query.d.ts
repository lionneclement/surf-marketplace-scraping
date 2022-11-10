export interface Product {
  id: number;
  facebook_id: number;
  title: string;
  description: string;
  url: string;
  location_text: string;
  latitude: number;
  longitude: number;
  formatted_amount: string;
  amount: number;
  currency: string;
  user_name: string;
  size: string | null;
  created_at: string;
}

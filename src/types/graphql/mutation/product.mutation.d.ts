export interface AddOneProduct {
  facebook_id: number;
  title: string;
  description: string;
  url: string;
  location_text: string | null;
  latitude: number;
  longitude: number;
  formatted_amount: string;
  amount: number;
  currency: string;
  user_name: string;
  size: string | null;
  created_at: string;
  volume: number | null;
}

export interface AddOneProductVariables {
  object: AddOneProduct;
}

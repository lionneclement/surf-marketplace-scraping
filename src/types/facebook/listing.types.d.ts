export interface FacebookMarketPlaceListing {
  data: Data;
  extensions: Extensions;
}

export interface Data {
  marketplace_search: MarketplaceSearch;
  marketplace_seo_page: any;
  viewer: Viewer;
  vehicle_model_query: any;
  flash_sale_event: any;
}

export interface MarketplaceSearch {
  feed_units: FeedUnits;
}

export interface FeedUnits {
  edges: Edge[];
  page_info: PageInfo;
  session_id: string;
  logging_unit_id: any;
}

export interface Edge {
  node: Node;
  cursor: any;
  __typename: string;
}

export interface Node {
  __typename: string;
  story_type: string;
  story_key: string;
  tracking: string;
  listing: Listing;
  id: string;
}

export interface Listing {
  __typename: string;
  id: string;
  primary_listing_photo: PrimaryListingPhoto;
  __isMarketplaceListingRenderable: string;
  listing_price: ListingPrice;
  strikethrough_price?: StrikethroughPrice;
  __isMarketplaceListingWithComparablePrice: string;
  comparable_price: any;
  comparable_price_type: any;
  location: Location;
  is_hidden: boolean;
  is_live: boolean;
  is_pending: boolean;
  is_sold: boolean;
  is_viewer_seller: boolean;
  min_listing_price: any;
  max_listing_price: any;
  marketplace_listing_category_id: string;
  marketplace_listing_title: string;
  custom_title: any;
  custom_sub_titles_with_rendering_flags: any[];
  origin_group: any;
  pre_recorded_videos: any[];
  __isMarketplaceListingWithChildListings: string;
  parent_listing: any;
  marketplace_listing_seller: MarketplaceListingSeller;
  __isMarketplaceListingWithDeliveryOptions: string;
  delivery_types: string[];
}

export interface PrimaryListingPhoto {
  __typename: string;
  image: Image;
  id: string;
}

export interface Image {
  uri: string;
}

export interface ListingPrice {
  formatted_amount: string;
  amount_with_offset_in_currency: string;
  amount: string;
}

export interface StrikethroughPrice {
  formatted_amount: string;
  amount: string;
}

export interface Location {
  reverse_geocode: ReverseGeocode;
}

export interface ReverseGeocode {
  city: string;
  state: string;
  city_page: CityPage;
}

export interface CityPage {
  display_name: string;
  id: string;
}

export interface MarketplaceListingSeller {
  __typename: string;
  name: string;
  id: string;
}

export interface PageInfo {
  end_cursor: string;
  has_next_page: boolean;
}

export interface Viewer {
  marketplace_settings: MarketplaceSettings;
  buy_location: BuyLocation;
  marketplace_saved_searches: MarketplaceSavedSearches;
}

export interface MarketplaceSettings {
  current_marketplace: CurrentMarketplace;
}

export interface CurrentMarketplace {
  __typename: string;
  is_metric_base: boolean;
  id: string;
}

export interface BuyLocation {
  buy_location: BuyLocation2;
}

export interface BuyLocation2 {
  location: Location2;
  id: string;
}

export interface Location2 {
  reverse_geocode: ReverseGeocode2;
}

export interface ReverseGeocode2 {
  city: string;
}

export interface MarketplaceSavedSearches {
  edges: any[];
}

export interface Extensions {
  is_final: boolean;
}

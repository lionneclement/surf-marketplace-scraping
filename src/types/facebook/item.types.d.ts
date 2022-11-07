export interface FacebookMarketPlaceItem {
  data: Data;
}

export interface Data {
  viewer: Viewer;
  node: Node;
}

export interface Viewer {
  marketplace_product_details_page: MarketplaceProductDetailsPage;
}

export interface MarketplaceProductDetailsPage {
  __typename: string;
  __isMarketplaceProductDetailsPage: string;
  marketplace_listing_renderable_target: MarketplaceListingRenderableTarget;
  target: Target;
  ufi_renderer: any;
  viewer: Viewer2;
  product_details_type: string;
  __module_operation_MarketplacePDP_page: ModuleOperationMarketplacePdpPage;
  __module_component_MarketplacePDP_page: ModuleComponentMarketplacePdpPage;
  id: string;
}

export interface MarketplaceListingRenderableTarget {
  seo_virtual_category: SeoVirtualCategory;
  location: Location;
  is_shipping_offered: boolean;
  __typename: string;
  id: string;
  product_item: ProductItem;
  shop_on_mp_item: ShopOnMpItem;
}

export interface SeoVirtualCategory {
  taxonomy_path: TaxonomyPath[];
  id: string;
}

export interface TaxonomyPath {
  seo_info: SeoInfo;
  id: string;
}

export interface SeoInfo {
  seo_url: string;
  id: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface ProductItem {
  id: string;
}

export interface ShopOnMpItem {
  is_shops_on_mp: boolean;
}

export interface Target {
  __typename: string;
  __isMarketplaceListingRenderable: string;
  __isMarketplaceListingWithDeliveryOptions: string;
  shipping_profile: any;
  is_buy_now_enabled: boolean;
  is_shipping_offered: boolean;
  should_hide_pdp_shipping_content: boolean;
  __isMarketplaceListingWithDiscounts: string;
  has_free_shipping_discounts: boolean;
  formatted_shipping_price: any;
  delivery_data: DeliveryData;
  formatted_shipping_price_list_price_only: any[];
  estimated_delivery_window: any;
  id: string;
  story: Story;
  redacted_description: RedactedDescription;
  creation_time: number;
  location_text: LocationText;
  location_vanity_or_id: string;
  is_viewer_seller: boolean;
  listing_inventory_type: string;
  delivery_types: string[];
  listing_price: ListingPrice;
  strikethrough_price: StrikethroughPrice;
  __isMarketplaceListingWithVariants: string;
  base_marketplace_listing_title: string;
  marketplace_listing_title: string;
  inventory_count: any;
  is_live: boolean;
  is_pending: boolean;
  is_sold: boolean;
  shipping_label_rate_type: any;
  formattedShippingPriceListWithZipcode: any[];
  __isMarketplaceListingWithComparablePrice: string;
  comparable_price: any;
  comparable_price_type: any;
  discounts_text: any;
  marketplaceListingRenderableIfLoggedOut: any;
  attribute_data: AttributeDaum[];
  __isMarketplaceMessageable: string;
  messaging_enabled: boolean;
  __isMarketplaceListingWithIntegrityStatus: string;
  listing_is_rejected: boolean;
  seller_message_thread: any;
  is_checkout_enabled: boolean;
  is_draft: boolean;
  can_seller_edit: boolean;
  origin_group: any;
  default_variant_listing: any;
  is_hidden: boolean;
  marketplace_listing_seller: MarketplaceListingSeller;
  reportable_ent_id: string;
  __isMarketplaceListingHideableFromFriends: string;
  hidden_from_friends: string;
  can_share: boolean;
  can_seller_change_availability: boolean;
  messagingEnabled: boolean;
  __isMarketplaceListingWithChildListings: string;
  has_children: boolean;
  active_order: any;
  rebuy_order_receipt: any;
  c2c_shipping_eligible: boolean;
  most_recent_active_order_as_buyer: any;
  order_summaries: any[];
  primary_listing_photo: PrimaryListingPhoto;
  is_seller_business_onboarded: boolean;
  product_item: ProductItem2;
  is_purchase_protected: boolean;
  __isMarketplaceListingWithCheckoutOffers: string;
  can_buyer_make_checkout_offer: boolean;
  is_cart_enabled: boolean;
  __isMarketplaceListingWithVacationMode: string;
  vacation_mode: any;
  __isGroupCommerceProductItemIsDeprecated: string;
  all_message_threads: AllMessageThreads;
  marketplace_listing_category_id: string;
  should_show_txn_survey_on_mas: boolean;
  incentive_campaign_for_free_shipping: any;
  first_message_suggested_value: any;
  variant_group: any;
  location: Location2;
  is_multi_variant_listing: boolean;
  marketplace_hashtags: MarketplaceHashtags;
  marketplace_bump_info: any;
  __isMarketplaceListingSellerNotices: string;
  listing_seller_notices: any[];
  shipping_offered: boolean;
  legal_disclosure_impressum_url: any;
  __isMarketplaceVehicleListing: string;
  vehicle_seller_type: any;
  __isMarketplaceListingWithBadges: string;
  commerce_badges_info: CommerceBadgesInfo;
  if_should_show_recommended_listings: any;
  if_should_show_complementary_listings: any;
  listing_photos: ListingPhoto[];
  pre_recorded_videos: any[];
}

export interface DeliveryData {
  carrier: any;
  delivery_address: any;
}

export interface Story {
  translation_available_for_viewer: boolean;
  translatability_for_viewer: TranslatabilityForViewer;
  translated_message_for_viewer: any;
  id: string;
  actors: Actor[];
  __isEntity: string;
  url: string;
  __isNode: string;
  save_info: SaveInfo;
  post_id: string;
}

export interface TranslatabilityForViewer {
  source_dialect_name: string;
}

export interface Actor {
  __typename: string;
  name: string;
  id: string;
}

export interface SaveInfo {
  viewer_save_state: string;
}

export interface RedactedDescription {
  text: string;
}

export interface LocationText {
  text: string;
}

export interface ListingPrice {
  formatted_amount_zeros_stripped: string;
  amount_with_offset_in_currency: string;
  amount: string;
  currency: string;
}

export interface StrikethroughPrice {
  formattedAmountWithoutDecimals: string;
}

export interface AttributeDaum {
  attribute_name: string;
  value: string;
  label: string;
}

export interface MarketplaceListingSeller {
  __typename: string;
  id: string;
  user_id: string;
  marketplace_ratings_stats_by_role: MarketplaceRatingsStatsByRole;
  __isProfile: string;
  marketplace_user_profile: MarketplaceUserProfile;
  name: string;
  profile_picture: ProfilePicture;
  __isActor: string;
  __isActorWithCustomizableCommerceProfile: string;
  customized_profile: any;
  profile_picture_160: ProfilePicture160;
  profile_picture_112: ProfilePicture112;
  profile_picture_64: ProfilePicture64;
  profile_picture_60: ProfilePicture60;
  profile_picture_50: ProfilePicture50;
  commerce_profile_picture_with_fallback_160: CommerceProfilePictureWithFallback160;
  commerce_profile_picture_with_fallback_112: CommerceProfilePictureWithFallback112;
  commerce_profile_picture_with_fallback_64: CommerceProfilePictureWithFallback64;
  commerce_profile_picture_with_fallback_60: CommerceProfilePictureWithFallback60;
  commerce_profile_picture_with_fallback_50: CommerceProfilePictureWithFallback50;
  join_time: number;
}

export interface MarketplaceRatingsStatsByRole {
  seller_ratings_are_private: boolean;
  seller_stats: SellerStats;
}

export interface SellerStats {
  five_star_ratings_average: number;
  five_star_total_rating_count_by_role: number;
}

export interface MarketplaceUserProfile {
  c2c_orders_shipped: any;
  id: string;
}

export interface ProfilePicture {
  uri: string;
}

export interface ProfilePicture160 {
  uri: string;
}

export interface ProfilePicture112 {
  uri: string;
}

export interface ProfilePicture64 {
  uri: string;
}

export interface ProfilePicture60 {
  uri: string;
}

export interface ProfilePicture50 {
  uri: string;
}

export interface CommerceProfilePictureWithFallback160 {
  uri: string;
}

export interface CommerceProfilePictureWithFallback112 {
  uri: string;
}

export interface CommerceProfilePictureWithFallback64 {
  uri: string;
}

export interface CommerceProfilePictureWithFallback60 {
  uri: string;
}

export interface CommerceProfilePictureWithFallback50 {
  uri: string;
}

export interface PrimaryListingPhoto {
  __typename: string;
  listing_image: ListingImage;
  id: string;
}

export interface ListingImage {
  uri: string;
}

export interface ProductItem2 {
  id: string;
  viewer_purchase_limit: number;
  boosted_marketplace_listing: any;
  promoted_listing: any;
}

export interface AllMessageThreads {
  is_empty: boolean;
}

export interface Location2 {
  latitude: number;
  longitude: number;
}

export interface MarketplaceHashtags {
  nodes: any[];
}

export interface CommerceBadgesInfo {
  source_summary: any;
  other_source_summary: any;
  badges: any[];
}

export interface ListingPhoto {
  __typename: string;
  accessibility_caption: string;
  image: Image;
  id: string;
}

export interface Image {
  height: number;
  width: number;
  uri: string;
}

export interface Viewer2 {
  __typename: string;
  marketplace_nux_states: MarketplaceNuxStates;
  marketplace_settings: MarketplaceSettings;
}

export interface MarketplaceNuxStates {
  mbl_www_selling_view_nux_state: string;
  mbl_www_post_publish_nux_state: string;
}

export interface MarketplaceSettings {
  custom_initial_message: any;
  search_radius: number;
  buy_location: BuyLocation;
}

export interface BuyLocation {
  latitude: number;
  longitude: number;
}

export interface ModuleOperationMarketplacePdpPage {
  __dr: string;
}

export interface ModuleComponentMarketplacePdpPage {
  __dr: string;
}

export interface Node {
  __typename: string;
  __isMarketplaceListingRenderable: string;
  __isMarketplaceListingWithPersonalization: string;
  personalization_info: any;
  id: string;
}

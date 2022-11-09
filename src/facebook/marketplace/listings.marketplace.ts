import axios from 'axios';
import QueryString from 'qs';
import {facebookHeaders, FACEBOOK_API_URL} from '../../config/facebook.config';
import {FacebookMarketPlaceListing} from '../../types/facebook/listing.type';

export const getFacebookMarketplaceListings = async ({
  limit = 24,
  query,
  longitude = 115.16185,
  latitude = -8.8200983,
  radiusInKm = 60,
  sortBy = 'CREATION_TIME_DESCEND'
}: {
  query: string;
  limit?: number;
  longitude?: number;
  latitude?: number;
  radiusInKm?: number;
  sortBy?: string;
}): Promise<FacebookMarketPlaceListing['data']> => {
  const now = new Date().getTime();
  const fullDaysSinceEpoch = Math.floor(now / 8.64e7);
  const commerceSearchAndRpCtimeDays = `${fullDaysSinceEpoch - 1};${fullDaysSinceEpoch}`;

  const variables = listingsVariables({
    limit,
    query,
    longitude,
    latitude,
    radiusInKm,
    sortBy,
    commerceSearchAndRpCtimeDays
  });

  const data = QueryString.stringify({
    variables: JSON.stringify(variables),
    doc_id: '5851968321514267'
  });

  const response = await axios.post<FacebookMarketPlaceListing>(FACEBOOK_API_URL, data, {
    headers: facebookHeaders
  });

  return response.data.data;
};

export const listingsVariables = ({
  limit = 24,
  query,
  longitude = 115.16185,
  latitude = -8.8200983,
  radiusInKm = 60,
  sortBy = 'CREATION_TIME_DESCEND',
  commerceSearchAndRpCtimeDays
}: {
  query: string;
  limit?: number;
  longitude?: number;
  latitude?: number;
  radiusInKm?: number;
  sortBy?: string;
  commerceSearchAndRpCtimeDays: string;
}): object => ({
  buyLocation: {latitude, longitude},
  contextual_data: null,
  count: limit,
  cursor: null,
  flashSaleEventID: '',
  hasFlashSaleEventID: false,
  marketplaceSearchMetadataCardEnabled: true,
  params: {
    bqf: {callsite: 'COMMERCE_MKTPLACE_WWW', query},
    browse_request_params: {
      commerce_enable_local_pickup: true,
      commerce_enable_shipping: true,
      commerce_search_and_rp_available: true,
      commerce_search_and_rp_category_id: [],
      commerce_search_and_rp_condition: null,
      commerce_search_and_rp_ctime_days: commerceSearchAndRpCtimeDays,
      filter_location_latitude: latitude,
      filter_location_longitude: longitude,
      filter_price_lower_bound: 0,
      filter_price_upper_bound: 214748364700,
      filter_radius_km: radiusInKm,
      commerce_search_sort_by: sortBy
    },
    custom_request_params: {
      browse_context: null,
      contextual_filters: [],
      referral_code: null,
      saved_search_strid: null,
      search_vertical: 'C2C',
      seo_url: null,
      surface: 'SEARCH',
      virtual_contextual_filters: []
    }
  },
  savedSearchID: null,
  savedSearchQuery: query,
  scale: 2,
  shouldIncludePopularSearches: false,
  vehicleParams: ''
});

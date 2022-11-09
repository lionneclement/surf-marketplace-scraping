import axios from 'axios';
import QueryString from 'qs';
import {FACEBOOK_API_URL} from '../../config/facebook.config';
import {FacebookMarketPlaceListing} from '../../types/facebook/listing.types';

export const getFacebookMarketPlaceListings = async (): Promise<FacebookMarketPlaceListing> => {
  const now = new Date().getTime();
  const fullDaysSinceEpoch = Math.floor(now / 8.64e7);

  const commerceSearchAndRpCtimeDays = `${fullDaysSinceEpoch - 1};${fullDaysSinceEpoch}`;

  const data = QueryString.stringify({
    variables: `{"buyLocation":{"latitude":-8.8200983,"longitude":115.16185},"contextual_data":null,"count":24,"cursor":null,"flashSaleEventID":"","hasFlashSaleEventID":false,"marketplaceSearchMetadataCardEnabled":true,"params":{"bqf":{"callsite":"COMMERCE_MKTPLACE_WWW","query":"surfboard"},"browse_request_params":{"commerce_enable_local_pickup":true,"commerce_enable_shipping":true,"commerce_search_and_rp_available":true,"commerce_search_and_rp_category_id":[],"commerce_search_and_rp_condition":null,"commerce_search_and_rp_ctime_days": "${commerceSearchAndRpCtimeDays}","filter_location_latitude":-8.8200983,"filter_location_longitude":115.16185,"filter_price_lower_bound":0,"filter_price_upper_bound":214748364700,"filter_radius_km":60,"commerce_search_sort_by":"CREATION_TIME_DESCEND"},"custom_request_params":{"browse_context":null,"contextual_filters":[],"referral_code":null,"saved_search_strid":null,"search_vertical":"C2C","seo_url":null,"surface":"SEARCH","virtual_contextual_filters":[]}},"savedSearchID":null,"savedSearchQuery":"surfboard","scale":2,"shouldIncludePopularSearches":false,"topicPageParams":{"location_id":"107286902636860","url":null},"vehicleParams":""}`,
    doc_id: '5851968321514267'
  });

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Cookie: 'fr=0yAYFMVbBgOgiX5zh..BjaLWO.Mp.AAA.0.0.BjaLWR.AWUbd8HcJKU'
  };

  const response = await axios.post<FacebookMarketPlaceListing>(FACEBOOK_API_URL, data, {
    headers
  });

  return response.data;
};

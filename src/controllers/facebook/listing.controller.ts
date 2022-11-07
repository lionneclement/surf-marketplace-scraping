import axios from 'axios';
import QueryString from 'qs';
import {FACEBOOK_API_URL} from '../../config/facebook.config';
import {FacebookMarketPlaceListing} from '../../types/facebook/listing.types';

export const getFacebookMarketPlaceListings = async (): Promise<FacebookMarketPlaceListing> => {
  const data = QueryString.stringify({
    variables:
      '{"buyLocation":{"latitude":-8.50055,"longitude":115.18649},"contextual_data":null,"count":24,"cursor":null,"flashSaleEventID":"","hasFlashSaleEventID":false,"marketplaceSearchMetadataCardEnabled":true,"params":{"bqf":{"callsite":"COMMERCE_MKTPLACE_WWW","query":"surfboard"},"browse_request_params":{"commerce_enable_local_pickup":true,"commerce_enable_shipping":true,"commerce_search_and_rp_available":true,"commerce_search_and_rp_category_id":[],"commerce_search_and_rp_condition":null,"commerce_search_and_rp_ctime_days":"19300;19299;19298;19297;19296;19295;19294;19293;19292;19291;19290;19289;19288;19287;19286;19285;19284;19283;19282;19281;19280;19279;19278;19277;19276;19275;19274;19273;19272;19271;19270","filter_location_latitude":-8.50055,"filter_location_longitude":115.18649,"filter_price_lower_bound":0,"filter_price_upper_bound":214748364700,"filter_radius_km":60},"custom_request_params":{"browse_context":null,"contextual_filters":[],"referral_code":null,"saved_search_strid":null,"search_vertical":"C2C","seo_url":null,"surface":"SEARCH","virtual_contextual_filters":[]}},"savedSearchID":null,"savedSearchQuery":"surfboard","scale":1,"shouldIncludePopularSearches":true,"topicPageParams":{"location_id":"107286902636860","url":null},"vehicleParams":""}',
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

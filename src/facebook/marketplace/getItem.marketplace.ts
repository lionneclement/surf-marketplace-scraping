import axios from 'axios';
import QueryString from 'qs';
import {facebookHeaders, FACEBOOK_API_URL} from '../../config/facebook.config';
import {FacebookMarketPlaceItem} from '../../types/facebook/item.type';

export const getFacebookMarketplaceItem = async ({id}: {id: number}): Promise<FacebookMarketPlaceItem['data']> => {
  const variables = itemVariables({
    id
  });

  const data = QueryString.stringify({
    variables: JSON.stringify(variables),
    doc_id: '5516791808425679'
  });

  const response = await axios.post<FacebookMarketPlaceItem>(FACEBOOK_API_URL, data, {
    headers: facebookHeaders
  });

  return response.data.data;
};

export const itemVariables = ({id}: {id: number}): object => ({
  targetId: id,
  UFI2CommentsProvider_commentsKey: 'MarketplacePDP',
  canViewCustomizedProfile: true,
  feedbackSource: 56,
  feedLocation: 'MARKETPLACE_MEGAMALL',
  location_vanity_page_id: '107286902636860',
  pdpContext_isHoisted: false,
  pdpContext_trackingData: 'browse_serp:ab93c14a-095b-445c-850f-89e2566c9a3d',
  referralCode: 'null',
  relay_flight_marketplace_enabled: false,
  removeDeprecatedCommunityRecommended: true,
  scale: 2,
  should_show_new_pdp: false,
  useDefaultActor: false
});

import {FacebookMarketPlaceItem} from '../types/facebook/item.type';
import {AddOneProduct} from '../types/graphql/mutation/productMutation.type';
import {getSurfboardSize} from './surfboardSize.helper';

export const formatProduct = ({item, id}: {id: number; item: FacebookMarketPlaceItem['data']}): AddOneProduct => {
  const {story, marketplace_listing_title, redacted_description, listing_price, location_text, creation_time} =
    item.viewer.marketplace_product_details_page.target;
  const {latitude, longitude} =
    item.viewer.marketplace_product_details_page.marketplace_listing_renderable_target.location;
  const {amount, currency, formatted_amount_zeros_stripped} = listing_price;

  const formattedProduct = {
    facebook_id: id,
    title: marketplace_listing_title,
    description: redacted_description.text,
    url: story.url,
    location_text: location_text.text,
    latitude: latitude,
    longitude: longitude,
    formatted_amount: formatted_amount_zeros_stripped,
    amount: Number(amount),
    currency,
    user_name: story.actors[0].name,
    created_at: new Date(creation_time * 1000).toISOString(),
    size: getSurfboardSize({title: marketplace_listing_title, description: redacted_description.text})
  };

  return formattedProduct;
};

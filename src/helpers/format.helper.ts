import {FacebookMarketPlaceItem} from '../types/facebook/item.type';
import {Product} from '../types/product.type';
import {getSurfboardSize} from './surfboardSize.helper';

export const formatProduct = ({item, id}: {id: string; item: FacebookMarketPlaceItem['data']}): Product => {
  const {
    story,
    marketplace_listing_title,
    redacted_description,
    listing_price,
    listing_photos,
    location_text,
    creation_time
  } = item.viewer.marketplace_product_details_page.target;
  const {latitude, longitude} =
    item.viewer.marketplace_product_details_page.marketplace_listing_renderable_target.location;
  const {amount, currency, formatted_amount_zeros_stripped} = listing_price;

  const formattedProduct = {
    facebookId: id,
    title: marketplace_listing_title,
    description: redacted_description.text,
    url: story.url,
    locationText: location_text.text,
    latitude: latitude,
    longitude: longitude,
    formattedAmount: formatted_amount_zeros_stripped,
    amount: Number(amount),
    currency,
    userName: story.actors[0].name,
    createdAt: new Date(creation_time * 1000).toISOString(),
    photos: listing_photos.map(({image}) => image.uri),
    size: getSurfboardSize({title: marketplace_listing_title, description: redacted_description.text})
  };

  return formattedProduct;
};

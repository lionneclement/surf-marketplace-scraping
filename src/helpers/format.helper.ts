import {MarketplaceProductDetailsPage} from '../types/facebook/item.type';
import {AddOneProduct} from '../types/graphql/mutation/product.mutation';
import {getSurfboardBrand} from './surfboard/brand.helper';
import {getSurfboardSize} from './surfboard/size.helper';
import {getSurfboardVolume} from './surfboard/volume.helper';

export const formatProductForDatabase = ({
  item,
  id,
  productPhotos
}: {
  id: number;
  item: MarketplaceProductDetailsPage;
  productPhotos: {data: {url: string}[]};
}): AddOneProduct => {
  const {
    story,
    marketplace_listing_title,
    redacted_description,
    listing_price,
    location_text,
    creation_time,
    formatted_price
  } = item.target;
  const {latitude, longitude} = item.marketplace_listing_renderable_target.location;
  const {amount, currency, formatted_amount_zeros_stripped} = listing_price;

  const createdAt = creation_time ? new Date(creation_time * 1000) : new Date();
  const title = marketplace_listing_title,
    description = redacted_description.text;

  const formattedProduct = {
    facebook_id: id,
    title,
    description,
    url: story.url,
    location_text: location_text?.text || null,
    latitude: latitude,
    longitude: longitude,
    formatted_amount: formatted_amount_zeros_stripped || formatted_price.text,
    amount: Number(amount),
    currency,
    user_name: story.actors[0].name,
    created_at: createdAt.toISOString(),
    size: getSurfboardSize({title, description}),
    volume: getSurfboardVolume({title, description}),
    brand: getSurfboardBrand({title, description}),
    product_photos: productPhotos
  };

  return formattedProduct;
};

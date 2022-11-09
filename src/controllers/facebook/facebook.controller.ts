import {Request, Response} from 'express';
import {getFacebookMarketplaceItem} from '../../facebook/marketplace/item.marketplace';
import {getFacebookMarketplaceListings} from '../../facebook/marketplace/listings.marketplace';
import {formatProduct} from '../../helpers/format.helper';
import {Product} from '../../types/product.type';
import {logError} from '../../utils/Logger.util';

export const facebookMarketplace = async (_: Request, response: Response): Promise<void> => {
  const products: Product[] = [];

  const listings = await getFacebookMarketplaceListings({query: 'surfboard'});
  const items = listings.marketplace_search.feed_units.edges;

  for (const {node} of items) {
    const id = node.story_key;

    try {
      const item = await getFacebookMarketplaceItem({id});
      products.push(formatProduct({id, item}));
    } catch (error: any) {
      logError(error);
    }
  }

  response.send('Success');
};

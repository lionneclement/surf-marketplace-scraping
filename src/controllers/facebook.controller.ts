import {Request, Response} from 'express';
import {getFacebookMarketPlaceItem} from './facebook/item.controller';
import {getFacebookMarketPlaceListings} from './facebook/listing.controller';

export const facebookMarketPlace = async (_: Request, response: Response): Promise<void> => {
  const listings = await getFacebookMarketPlaceListings();

  listings.data.marketplace_search.feed_units.edges.forEach(async ({node}, index) => {
    const id = node.story_key;
    console.log('id: ', id);

    if (index < 2) {
      const item = await getFacebookMarketPlaceItem({id});

      console.log('item description', item.viewer.marketplace_product_details_page.target.redacted_description);
    }
  });

  response.send('Success');
};

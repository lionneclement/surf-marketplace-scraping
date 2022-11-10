import {Request, Response} from 'express';
import {graphqlClient} from '../client/graphql.client';
import {getFacebookMarketplaceItem} from '../facebook/marketplace/getItem.marketplace';
import {getFacebookMarketplaceListings} from '../facebook/marketplace/getListings.marketplace';
import {ADD_ONE_PRODUCT} from '../graphql/mutation/product.mutation';
import {PRODUCT_BY_FACEBOOK_ID} from '../graphql/query/product.query';
import {formatProductForDatabase} from '../helpers/format.helper';
import {AddOneProductVariables} from '../types/graphql/mutation/product.mutation';
import {logError} from '../utils/Logger.util';

export const facebookMarketplaceAddProducts = async (_: Request, response: Response): Promise<void> => {
  const listings = await getFacebookMarketplaceListings({query: 'surfboard'});
  const items = listings.marketplace_search.feed_units.edges;

  for (const {node} of items) {
    const id = Number(node.story_key);

    try {
      // Check if product exists in database
      const productByFacebookId = await graphqlClient.query<{product: {id: number}[]}, {facebook_id: number}>({
        query: PRODUCT_BY_FACEBOOK_ID,
        variables: {facebook_id: id},
        fetchPolicy: 'no-cache'
      });

      if (productByFacebookId.data.product.length === 0) {
        const item = await getFacebookMarketplaceItem({id});
        // Add product to database
        const formattedProductForDatabase = formatProductForDatabase({id, item});
        await graphqlClient.mutate<{product: {id: number}}, AddOneProductVariables>({
          mutation: ADD_ONE_PRODUCT,
          variables: {object: formattedProductForDatabase},
          fetchPolicy: 'no-cache'
        });
      }
    } catch (error: any) {
      logError(error);
    }
  }

  response.send('Success');
};

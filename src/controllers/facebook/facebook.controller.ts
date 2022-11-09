import {Request, Response} from 'express';
import {graphqlClient} from '../../client/graphql.client';
import {getFacebookMarketplaceItem} from '../../facebook/marketplace/getItem.marketplace';
import {getFacebookMarketplaceListings} from '../../facebook/marketplace/getListings.marketplace';
import {ADD_ONE_PRODUCT} from '../../graphql/mutation/product.mutation';
import {PRODUCT_BY_FACEBOOK_ID} from '../../graphql/query/product.query';
import {formatProduct} from '../../helpers/format.helper';
import {AddOneProduct} from '../../types/graphql/mutation/productMutation.type';
import {logError} from '../../utils/Logger.util';

export const facebookMarketplace = async (_: Request, response: Response): Promise<void> => {
  const listings = await getFacebookMarketplaceListings({query: 'surfboard'});
  const items = listings.marketplace_search.feed_units.edges;

  for (const {node} of items) {
    const id = Number(node.story_key);

    try {
      const item = await getFacebookMarketplaceItem({id});
      const product = formatProduct({id, item});

      // Check if product exists in database
      const productByFacebookId = await graphqlClient.query<{product: {id: number}[]}, {facebook_id: number}>({
        query: PRODUCT_BY_FACEBOOK_ID,
        variables: {facebook_id: id},
        fetchPolicy: 'no-cache'
      });

      if (productByFacebookId.data.product.length === 0) {
        // Add product to database
        await graphqlClient.mutate<{product: {id: number}}, {object: AddOneProduct}>({
          mutation: ADD_ONE_PRODUCT,
          variables: {object: product},
          fetchPolicy: 'no-cache'
        });
      }
    } catch (error: any) {
      logError(error);
    }
  }

  response.send('Success');
};

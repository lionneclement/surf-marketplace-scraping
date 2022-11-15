import {Request, Response} from 'express';
import {graphqlClient} from '../../client/graphql.client';
import {getFacebookMarketplaceItem} from '../../facebook/marketplace/getItem.marketplace';
import {getFacebookMarketplaceListings} from '../../facebook/marketplace/getListings.marketplace';
import {ADD_ONE_PRODUCT} from '../../graphql/mutation/product.mutation';
import {PRODUCT_BY_FACEBOOK_ID} from '../../graphql/query/product.query';
import {formatProductForDatabase} from '../../helpers/format.helper';
import {AddOneProductVariables} from '../../types/graphql/mutation/product.mutation';
import {logError} from '../../utils/Logger.util';

export const facebookMarketplaceAddProducts = async (resquest: Request, response: Response): Promise<Response> => {
  const query = 'surfboard',
    longitude = 115.16185,
    latitude = -8.8200983;

  try {
    const listings = await getFacebookMarketplaceListings({query, longitude, latitude});
    const items = listings.marketplace_search.feed_units.edges;

    for (const {node} of items) {
      const id = Number(node.story_key);

      // Check if product exists in database
      const productByFacebookId = await graphqlClient.query<{product: {id: number}[]}, {facebook_id: number}>({
        query: PRODUCT_BY_FACEBOOK_ID,
        variables: {facebook_id: id},
        fetchPolicy: 'no-cache'
      });

      if (productByFacebookId.data.product.length === 0) {
        const item = await getFacebookMarketplaceItem({id});
        const productDetails = item.viewer.marketplace_product_details_page;
        if (productDetails) {
          // Add product to database
          const formattedProductForDatabase = formatProductForDatabase({id, item: productDetails});
          await graphqlClient.mutate<{product: {id: number}}, AddOneProductVariables>({
            mutation: ADD_ONE_PRODUCT,
            variables: {object: formattedProductForDatabase},
            fetchPolicy: 'no-cache'
          });
        }
      }
    }
  } catch (error: any) {
    logError(error);
    return response.status(500).send('Error');
  }

  return response.send('Success');
};

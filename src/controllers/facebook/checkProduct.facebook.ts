import {Request, Response} from 'express';
import {graphqlClient} from '../../client/graphql.client';
import {getFacebookMarketplaceItem} from '../../facebook/marketplace/getItem.marketplace';
import {UPDATE_SOLD, UPDATE_VISIBILITY} from '../../graphql/mutation/product.mutation';
import {ALL_AVAIBLE_PRODUCTS} from '../../graphql/query/product.query';
import {Product} from '../../types/graphql/query/product.query';
import {logError} from '../../utils/Logger.util';

export const facebookMarketplaceCheckProducts = async (_: Request, response: Response): Promise<Response> => {
  try {
    const products = await graphqlClient.query<{product: Product[]}>({
      query: ALL_AVAIBLE_PRODUCTS,
      fetchPolicy: 'no-cache'
    });

    for (const {facebook_id, id} of products.data.product) {
      const item = await getFacebookMarketplaceItem({id: facebook_id});
      const productDetails = item.viewer.marketplace_product_details_page;

      if (!productDetails) {
        // Update product to invisible
        await graphqlClient.mutate<{product: {id: number}}, {id: number; is_visible: boolean}>({
          mutation: UPDATE_VISIBILITY,
          variables: {id, is_visible: false},
          fetchPolicy: 'no-cache'
        });
      } else if (productDetails.target.is_sold || productDetails.target.is_pending) {
        // Update product to sold
        await graphqlClient.mutate<{product: {id: number}}, {id: number; is_sold: boolean}>({
          mutation: UPDATE_SOLD,
          variables: {id, is_sold: true},
          fetchPolicy: 'no-cache'
        });
      }
    }
  } catch (error: any) {
    logError(error);
    return response.status(500).send('Error');
  }

  return response.send('Success');
};

import {Request, Response} from 'express';
import {graphqlClient} from '../../client/graphql.client';
import {getFacebookMarketplaceItem} from '../../facebook/marketplace/getItem.marketplace';
import {UPDATE_SOLD} from '../../graphql/mutation/product.mutation';
import {ALL_AVAILABLE_PRODUCTS} from '../../graphql/query/product.query';
import {Product} from '../../types/graphql/query/product.query';
import {logError} from '../../utils/logger.util';

export const facebookMarketplaceCheckProducts = async (_: Request, response: Response): Promise<Response> => {
  try {
    const products = await graphqlClient.query<{product: Product[]}>({
      query: ALL_AVAILABLE_PRODUCTS,
      fetchPolicy: 'no-cache'
    });
    console.log('products length ', products.data.product.length);

    for (const {facebook_id, id} of products.data.product) {
      console.log('id: ', id);
      const item = await getFacebookMarketplaceItem({id: facebook_id});
      const productDetails = item.viewer.marketplace_product_details_page;

      if (!productDetails || productDetails.target.is_sold || productDetails.target.is_pending) {
        console.log(`Product ${id} is sold`);
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

import {Request, Response} from 'express';
import {algoliaIndex} from '../client/algolia.client';
import {graphqlClient} from '../client/graphql.client';
import {ALL_PRODUCTS} from '../graphql/query/product.query';
import {formatProductForAlgolia} from '../helpers/format.helper';
import {Product} from '../types/graphql/query/product.query';
import {logError} from '../utils/Logger.util';

export const algoliaSaveObjects = async (_: Request, response: Response): Promise<void> => {
  try {
    const products = await graphqlClient.query<{product: Product[]}>({
      query: ALL_PRODUCTS,
      fetchPolicy: 'no-cache'
    });

    const productsForAlgolia = products.data.product.map(product => formatProductForAlgolia({product}));

    await algoliaIndex.saveObjects(productsForAlgolia);
  } catch (error: any) {
    logError(error);
  }

  response.send('Success');
};

import algoliasearch from 'algoliasearch';
import {ProductForAlgolia} from '../types/algolia/product.type';

export const algoliaSaveObject = async ({product}: {product: ProductForAlgolia}): Promise<void> => {
  const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID as string;
  const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY as string;
  const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME as string;

  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX_NAME);

  await index.saveObject(product);
};

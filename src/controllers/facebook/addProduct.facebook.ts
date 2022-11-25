import {Request, Response} from 'express';
import {graphqlClient} from '../../client/graphql.client';
import {getFacebookMarketplaceItem} from '../../facebook/marketplace/getItem.marketplace';
import {getFacebookMarketplaceListings} from '../../facebook/marketplace/getListings.marketplace';
import {ADD_ONE_PRODUCT} from '../../graphql/mutation/product.mutation';
import {PRODUCT_BY_FACEBOOK_ID} from '../../graphql/query/product.query';
import {formatProductForDatabase} from '../../helpers/format.helper';
import {AddOneProductVariables} from '../../types/graphql/mutation/product.mutation';
import {downloadImage} from '../../utils/download.util';
import {uploadFileOnCloud} from '../../utils/googleCloud.util';
import {logError} from '../../utils/logger.util';
import {customSlugify} from '../../utils/sulgify. util';

export const facebookMarketplaceAddProducts = async (_: Request, response: Response): Promise<Response> => {
  const query = 'surfboard',
    longitude = 115.16185,
    latitude = -8.8200983;

  try {
    const listings = await getFacebookMarketplaceListings({query, longitude, latitude});
    const items = listings.marketplace_search.feed_units.edges;
    console.log('items length ', items.length);

    for (const {node} of items) {
      const id = Number(node.story_key);
      console.log('id: ', id);

      // Check if product exists in database
      const productByFacebookId = await graphqlClient.query<{product: {id: number}[]}, {facebook_id: number}>({
        query: PRODUCT_BY_FACEBOOK_ID,
        variables: {facebook_id: id},
        fetchPolicy: 'no-cache'
      });

      if (productByFacebookId.data.product.length === 0) {
        console.log('Product does not exist in database');
        const item = await getFacebookMarketplaceItem({id});
        const productDetails = item.viewer.marketplace_product_details_page;
        if (productDetails) {
          // Add product to database
          const productTitle = productDetails.target.marketplace_listing_title;
          const listingPhotos = productDetails.target.listing_photos;

          const productPhotos: {data: {url: string}[]} = {data: []};

          for (const [index, {image}] of listingPhotos.entries()) {
            const filename = customSlugify(`${id}-${productTitle}${index}.jpg`);
            console.log('filename: ', filename);
            const destinationFileName = `surfboard/${filename}.jpg`;

            await downloadImage({url: image.uri, filename});
            await uploadFileOnCloud({
              filePath: `./download/image/${filename}`,
              destinationFileName
            });
            productPhotos.data.push({url: destinationFileName});
          }
          console.log('productPhotos: ', productPhotos);

          const formattedProductForDatabase = formatProductForDatabase({id, item: productDetails, productPhotos});
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

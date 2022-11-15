import {gql} from '@apollo/client/core';

export const ADD_ONE_PRODUCT_PHOTO = gql`
  mutation AddOneProductPhoto($product_id: Int!, $url: String!) {
    product_photo: insert_product_photo_one(object: {product_id: $product_id, url: $url}) {
      id
    }
  }
`;

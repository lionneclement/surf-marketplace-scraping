import {gql} from '@apollo/client/core';

export const ADD_ONE_PRODUCT = gql`
  mutation AddOneProduct($object: product_insert_input!) {
    insert_product_one(object: $object) {
      id
    }
  }
`;

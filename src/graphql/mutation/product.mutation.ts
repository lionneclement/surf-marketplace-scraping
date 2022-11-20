import {gql} from '@apollo/client/core';

export const ADD_ONE_PRODUCT = gql`
  mutation AddOneProduct($object: product_insert_input!) {
    product: insert_product_one(object: $object) {
      id
    }
  }
`;

export const UPDATE_SOLD = gql`
  mutation UpdateSold($id: Int!, $is_sold: Boolean!) {
    update_product_by_pk(pk_columns: {id: $id}, _set: {is_sold: $is_sold, sold_at: "now()"}) {
      id
    }
  }
`;

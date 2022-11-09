import {gql} from '@apollo/client/core';

export const PRODUCT_BY_FACEBOOK_ID = gql`
  query ProductByFacebookId($facebook_id: numeric!) {
    product(where: {facebook_id: {_eq: $facebook_id}}) {
      id
    }
  }
`;

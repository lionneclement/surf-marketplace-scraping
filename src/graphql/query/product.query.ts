import {gql} from '@apollo/client/core';

export const PRODUCT_BY_FACEBOOK_ID = gql`
  query ProductByFacebookId($facebook_id: numeric!) {
    product(where: {facebook_id: {_eq: $facebook_id}}) {
      id
    }
  }
`;

export const ALL_PRODUCTS = gql`
  query AllProducts {
    product {
      id
      facebook_id
      title
      description
      url
      location_text
      latitude
      longitude
      formatted_amount
      amount
      currency
      user_name
      size
      created_at
    }
  }
`;

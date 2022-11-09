import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import fetch from 'cross-fetch';

export const graphqlClient = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.API_URI}/v1/graphql`,
    headers: {'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET},
    fetch
  }),
  cache: new InMemoryCache()
});

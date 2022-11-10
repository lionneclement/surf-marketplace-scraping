import algoliasearch from 'algoliasearch';

export const algoliaClient = algoliasearch(process.env.ALGOLIA_APP_ID as string, process.env.ALGOLIA_API_KEY as string);

export const algoliaIndex = algoliaClient.initIndex(process.env.ALGOLIA_INDEX_NAME as string);

import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import Typesense from 'typesense'

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.TYPESENSE_SEARCH_ONLY_API,
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: "443",
        protocol: "https"
      }
    ]
  },

  additionalSearchParameters: {
    query_by: "title,authors"
  }
});

const searchClient = typesenseInstantsearchAdapter.searchClient;

const search = instantsearch({
  indexName: 'books',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
  }),

  instantsearch.widgets.analytics({
    pushFunction(formattedParameters, state, results) {
      console.log(state['query']);
      console.log('inside functions');
      gtag("event", "view_search_results", {search_term: state['query']});
    },
  }),
  
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();

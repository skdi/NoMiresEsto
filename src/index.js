import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Importing Apollo client */
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';

/* Invoke Apollo Client */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.graphcms.com/simple/v1/swapi'
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { MainPage } from './MainPage/MainPage';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <MainPage/>
  </ApolloProvider>,
  document.getElementById('root')
);
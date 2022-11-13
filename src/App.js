import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MainRouter from './routes/MainRouter'
import './assets/style/style.css'


const client = new ApolloClient({
  uri: 'https://dex-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MainRouter/>
    </ApolloProvider>        
  );
}

export default App;

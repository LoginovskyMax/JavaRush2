import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { ApolloProvider } from "@apollo/client/react";
import { SetContextLink  } from '@apollo/client/link/context'

const httpLink = new HttpLink({
  uri: "https://rickandmortyapi.com/graphql",
})

const authLink = new SetContextLink((prevContext) => {
  const token = 'mySecretToken';
  return {
    headers: {
      ...prevContext.headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
       <ApolloProvider client={client}>
           <Provider store={store}>
              <App />,
           </Provider>
       </ApolloProvider>
    </BrowserRouter>
)

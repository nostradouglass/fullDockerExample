
import * as ReactDOM from 'react-dom'
import App from './app'
import {ApolloClient, InMemoryCache, NormalizedCacheObject, ApolloProvider, HttpLink} from '@apollo/client'

const link = "http://localhost:3050/api/graphql/"


const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: link})
  })

ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
    document.getElementById('react'))
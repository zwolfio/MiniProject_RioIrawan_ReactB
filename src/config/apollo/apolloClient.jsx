import { ApolloClient, InMemoryCache } from "@apollo/client";


const apolloClient = new ApolloClient({
    uri: 'https://mini-project-altario.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers:{
      "x-hasura-admin-secret" : "kik9ga5bNELCvdi0V47Svx2w2UoLt8JURyXkTMFumCjDMRzbot5R25y4HAJA9Ryn",
  }
  });

export default apolloClient
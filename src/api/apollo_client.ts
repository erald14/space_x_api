import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://coding-challenge-a8s934ksd.eu-central-1.elasticbeanstalk.com/graphql",
  cache: new InMemoryCache(),
});

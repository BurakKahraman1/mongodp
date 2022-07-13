import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    //uri: "https://cansariyar.com/works/demo-wp/graphql",
    uri: "https://writer.healthinmonde.com/graphql",
    cache: new InMemoryCache(),
});

export default client;
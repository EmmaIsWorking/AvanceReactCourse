import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { App } from "./App";

const URL = "https://petgram-server-emmaisworking.emmaisworking.now.sh/graphql";

const client = new ApolloClient({
  uri: URL,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);

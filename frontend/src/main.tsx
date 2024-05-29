import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const query = `
  query GetTodos {
    getTodos {
      title
      completed
      user {
        email
        name
      }
    }
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </>
);

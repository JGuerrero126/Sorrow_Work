import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Images from "./pages/Images";
import Quotes from "./pages/Quotes";
import { ChakraProvider } from "@chakra-ui/react";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Images" element={<Images />} />
            <Route path="/Quotes" element={<Quotes />} />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;

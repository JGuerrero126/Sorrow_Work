const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Image {
    imageURL: String
    artist: String
  }
  type Quote {
    author: String
    quotetext: String
    source: String
  }
  input imageInput {
    imageURL: String!
    artist: String!
  }
  input quoteInput {
    author: String!
    quotetext: String!
    source: String
  }
  type Query {
    images: [Image]
    quotes: [Quote]
  }
  type Mutation {
    saveImage(imageData: imageInput): Image
    saveQuote(quoteData: quoteInput): Quote
  }
`;

module.exports = typeDefs;

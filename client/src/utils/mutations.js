import { gql } from "@apollo/client";

export const SAVE_ITEM = gql`
  mutation saveItem($imageData: imageDataInput) {
    saveItem(imageData: $imageData) {
      imageURL
    }
  }
`;

export const SAVE_QUOTE = gql`
  mutation saveQuote($quoteData: quoteDataInput) {
    saveItem(quoteData: $quoteData) {
      author
      quotetext
      source
    }
  }
`;

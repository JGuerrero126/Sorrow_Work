import { gql } from "@apollo/client";

export const QUERY_IMAGES = gql`
  query images {
    images {
      imageURL
    }
  }
`;

export const QUERY_QUOTE = gql`
  query quote {
    quote {
      author
      quotetext
      source
    }
  }
`;

export const QUERY_ALL = gql`
  query quotes {
    quotes {
      author
      quotetext
      source
    }
    images {
      imageURL
    }
  }
`;

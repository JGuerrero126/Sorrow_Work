const { Quote, Image } = require("../models");
const resolvers = {
  Query: {
    quotes: async () => {
      const quoteData = await Quote.find();
      return quoteData;
    },
    images: async () => {
      return await Image.find();
    },
  },

  Mutation: {
    saveImage: async (parent, { imageData }) => {
      if (imageData) {
        console.log(imageData);
        const image = await Image.create({ ...imageData });
        console.log(image);
        return image;
      }
    },
    saveQuote: async (parent, { quoteData }) => {
      if (quoteData) {
        console.log(quoteData);
        const quote = await Quote.create({ ...quoteData });
        console.log(quote);
        return quote;
      }
    },
  },
};

module.exports = resolvers;

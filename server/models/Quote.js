const { Schema, model } = require("mongoose");

// import schema from Item.js

const quoteSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    quotetext: {
      type: String,
      required: true,
    },
    source: {
      type: String,
    },
  },
  // set to use virtual below
  { toJSON: { virtuals: true } }
);

const Quote = model("quote", quoteSchema);

module.exports = Quote;

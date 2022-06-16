const db = require("../config/connection");
const { Image, Quote } = require("../models");

const imageData = require("./ImageData.json");
const quoteData = require("./QuoteData.json");

db.once("open", async () => {
  await Quote.deleteMany({});
  await Image.deleteMany({});

  const images = await Image.insertMany(imageData);
  const quotes = await Quote.insertMany(quoteData);

  console.log("Database seeded!");
  process.exit(0);
});

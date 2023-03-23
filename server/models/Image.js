const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  imageURL: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
});

const Image = model("image", imageSchema);

module.exports = Image;

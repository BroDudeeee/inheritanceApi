import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  userId: {
    type: String,
    requried: true,
  },
  father: {
    type: String,
  },
  mother: {
    type: String,
  },
  son: {
    type: String,
  },
  dauther: {
    type: String,
  },
  uncle: {
    type: String,
  },
  aunt: {
    type: String,
  },
});

export default mongoose.model("Card", cardSchema);

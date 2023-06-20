import mongoose from "mongoose";

const questSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

export default mongoose.model("question", questSchema);

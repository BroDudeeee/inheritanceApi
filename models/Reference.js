import mongoose from "mongoose";

const referencesSchema = new mongoose.Schema({
  text: {
    type: String,
  },
});

export default mongoose.model("Rferences", referencesSchema);

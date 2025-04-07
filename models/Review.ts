import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  review: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);

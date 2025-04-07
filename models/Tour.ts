import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  time: { type: String, required: true },
  type: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: String, required: true },
  price: { type: String, required: true },
});

export default mongoose.models.Tour || mongoose.model("Tour", tourSchema);

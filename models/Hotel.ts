import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: String, required: true },
  price: { type: String, required: true },
});

export default mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

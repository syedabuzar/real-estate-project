import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  image: { type: String, required: true },
  country: { type: String, required: true },
  travelers: { type: String, required: true },
});

export default mongoose.models.Destination ||
  mongoose.model("Destination", destinationSchema);

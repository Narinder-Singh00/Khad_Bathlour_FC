import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  name: String,
  team: String,
  email: String,
  phone: String
}, { timestamps: true });

export default mongoose.model("Tournament", tournamentSchema);
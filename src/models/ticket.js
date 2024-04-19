import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
  ticketId: { type: String, required: true},
  title: { type: String, required: true },
  price: { type: Number, required: true },
  fromLocation: { type: String, required: true, min: 2 },
  toLocation: { type: String, required: true, min: 2 },
  toLocationPhotoUrl: { type: String, required: true },
});

export default mongoose.model("Ticket", ticketSchema);

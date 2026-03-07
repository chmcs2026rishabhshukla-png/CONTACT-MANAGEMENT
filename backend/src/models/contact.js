import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  category: {
    type: String,
    default: "General",
  },
  favourite: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);

import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// create a model or a collection
export const Contact = model("Contact", contactSchema);

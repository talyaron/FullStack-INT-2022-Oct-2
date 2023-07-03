import mongoose, { Schema } from "mongoose";

export interface contact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  cellNumber: number;
  address: string;
  email: string;
  _id: string;
}

const contactSChema = new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  cellNumber: Number,
  address: String,
  email: String,
  _id: String,
});

const ContactModel = mongoose.model("contact", contactSChema);

export default ContactModel;

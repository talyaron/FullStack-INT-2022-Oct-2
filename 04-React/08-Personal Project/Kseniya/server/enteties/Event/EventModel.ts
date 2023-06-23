import mongoose, { Schema } from "mongoose";

export enum EVENT_TYPES {
  concert = "concert",
  festival = "festival",
}

type EVENT_TYPES_LITERALS = keyof typeof EVENT_TYPES;

export interface IEvent {
  eventType: EVENT_TYPES_LITERALS;
  label: string;
  date: string;
  price: number;
  img: string
}

export const EventSchema = new Schema({
  eventType: {
    type: String,
    enum: EVENT_TYPES,
  },
  label: String,
  date: String,
  price: Number,
  img: String
});

const EventModel = mongoose.model("event", EventSchema);

export default EventModel;

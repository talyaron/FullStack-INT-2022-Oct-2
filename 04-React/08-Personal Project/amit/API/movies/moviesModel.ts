import mongoose, { Schema, Document } from "mongoose";
import { SeatSchema } from "../seats/seatsModel";


export interface Movie{
    name: string;
}

export const MovieSchema = new Schema({
    name: String,
})

export enum SeatType {
    FREE = "free",
    TAKEN = "taken",
    PICKED = "picked",
  }
  
export const MovieSeatSchema = new Schema({
    movie: MovieSchema,
    seat: SeatSchema,
    seatStatus: {
        type: String,
        enum: SeatType,
        default: SeatType.FREE,
    },
})

const MovieModel = mongoose.model<Movie>("movies", MovieSchema)
export default MovieModel

export const  MovieSeatModel = mongoose.model("movie-seat", MovieSeatSchema)
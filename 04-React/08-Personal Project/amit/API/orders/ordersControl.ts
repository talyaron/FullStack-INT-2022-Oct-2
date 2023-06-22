import { MovieSeatModel } from "../movies/moviesModel";
import OrderModel from "./ordersModel";

export const createOrder = async (req: any, res: any) => {
  try {
    const { user, movieSeats } = req.body;
    if(!user) throw new Error ("user not found on req")
    if(!movieSeats) throw new Error ("movie seats not found on req")
    
    movieSeats.map(async(movieSeat:any) => {
      const _movieSeat = await MovieSeatModel.findById(movieSeat._id)
      if(!_movieSeat) throw new Error("movie-seat not found")
      _movieSeat.seatStatus = "taken"
      _movieSeat.save()
    })
   
    const _user = {id:user._id, name: user.name }

    const orderDB = await OrderModel.create({ user: _user, seatsInMovie: movieSeats });
    
    res.status(201).send({ ok: true, orderDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

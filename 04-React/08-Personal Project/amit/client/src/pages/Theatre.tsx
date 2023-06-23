import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Theatre.scss"
import Seat, { SeatInterface } from '../components/seat/Seat';
import { useParams } from 'react-router-dom';
import Order, { orderInterface } from '../components/order/Order';

const Theatre = () => {
    try {
        const [seats, setSeats] = useState<SeatInterface[]>([])
        const [showOrder, setShowOrder] = useState<boolean>(false)
        const [order, setOrder] = useState<orderInterface>({
            orderId: "",
            userName: "",
            movieName: "",
            seats: []
        })

        const [MovieName, setMovieName] = useState<string>("")
        const { movieId } = useParams()

        function findPickedSeats(seats: SeatInterface[]) {
            try {
                const pickedSeats = seats.filter((seat) => seat.isPicked)
                return pickedSeats.length
            } catch (error) {
                console.error(error)
            }
        }

        useEffect(() => {
            async function getSeats() {
                try {
                    console.log("fetching seats from server");

                    const { data } = await axios.post("/api/seats/get-movie-seats", { movieId })

                    const { movieSeats } = data;
                    if (!movieSeats) throw new Error("no seats from data")

                    setSeats(movieSeats)
                    setMovieName(movieSeats[0].movie.name)
                } catch (error) {
                    console.error(error)
                }
            }
            getSeats()
        }, [order])


        async function handleOrder(seats: SeatInterface[]) {
            try {
                async function extractUserFromDB() {
                    try {
                        const { data } = await axios.get("/api/users/get-user")
                        const { _user } = data

                        return _user
                    } catch (error) {
                        console.error(error)
                    }
                }
                const user = await extractUserFromDB()
                if (!user) throw new Error("user not found on handle order");

                const movieSeats = seats.filter((seat) => seat.isPicked)
                if (!movieSeats) throw new Error("movie seats not found on handle order")

                const order = { movieSeats, user }
                const { data } = await axios.post("/api/orders/create-order", order)
                setShowOrder((order) => !order)

                setOrder({
                    orderId: data.orderDB._id,
                    userName: user.name,
                    movieName: data.orderDB.seatsInMovie[0].movie.name,
                    seats: data.orderDB.seatsInMovie,
                })
            } catch (error) {
                console.error(error)
            }
        }

        function onSeatPicked(seatId: string, newPickedState: boolean): void {
            try {
                const seatIndex = seats.findIndex((seat) => seat._id === seatId)
                if (seatIndex === -1) throw new Error("seat not found")

                const newSeats = [...seats]
                newSeats[seatIndex].isPicked = newPickedState
                setSeats(newSeats)
            } catch (error) {
                console.error(error)
            }
        }

        return (
            <div className="theatreContainer">
                <h2>{MovieName}</h2>
                <div className="screen">screen</div>
                {showOrder ? <Order
                    setShowOrder={setShowOrder}
                    orderId={order.orderId}
                    userName={order.userName}
                    movieName={order.movieName}
                    seats={order.seats}
                /> : null}
                <div className="seatsContainer">
                    {seats.map((movieSeat: any) => (
                        <Seat
                            onSeatPicked={onSeatPicked}
                            key={movieSeat._id}
                            _id={movieSeat._id}
                            seatStatus={movieSeat.seatStatus}
                            rowNumber={movieSeat.seat.rowNumber}
                            seatNumber={movieSeat.seat.seatNumber}
                        />
                    ))}
                </div>
                <div className="bottomBar">
                    <h2>you picked <span style={{ color: "gold" }}>{findPickedSeats(seats)}</span> seats</h2>
                    <button onClick={() => handleOrder(seats)}>order now</button>
                </div>

            </div>
        )
    } catch (error) {
        console.error(error)
        return null
    }
}

export default Theatre
import { FC, SetStateAction, } from "react";
import "./Order.scss";
import { SeatInterface } from "../seat/Seat";
import { motion } from "framer-motion";

export interface orderInterface {
  orderId: string;
  userName: string;
  movieName: string;
  seats: SeatInterface[];
}

interface OrderProps {
  orderId: string;
  userName: string;
  movieName: string;
  seats: SeatInterface[];
  setShowOrder: SetStateAction<any>;
}

const Order: FC<OrderProps> = ({ orderId, userName, movieName, seats, setShowOrder }) => {
  try {
    function handleCloseOrder() {
      try {
        setShowOrder(false)
      } catch (error) {
        console.error(error)
      }
    }
    return (
      <motion.div
        className="order"
        drag
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="order__close" onClick={handleCloseOrder}>X</div>
        <h1>your order</h1>
        <h2>order number: {orderId}</h2>
        <h2>user name: {userName}</h2>
        <h2>movie: {movieName}</h2>
        <h3>seats</h3>
        {seats.map((_seat: any, i) => (
          <div key={_seat._id}>#{i + 1} -
            <span> row number: {_seat.seat.rowNumber} </span>
            <span> seat number: {_seat.seat.seatNumber} </span>
          </div>
        ))}
      </motion.div>
    )
  } catch (error) {
    console.error(error)
    return null
  }

};

export default Order;
import { FC, useState, } from "react";
import "./Seat.scss";


interface SeatProps {
  _id: string;
  onSeatPicked: (seatId: string, newPickedState: boolean) => void;
  rowNumber: string;
  seatNumber: string;
  seatStatus: string;
}

export interface SeatInterface {
  _id: string;
  rowNumber: string;
  seatNumber: string;
  seatStatus: string;
  isPicked?: boolean;
}

const Seat: FC<SeatProps> = ({ seatNumber, rowNumber, seatStatus, onSeatPicked, _id }) => {
console.log("seat comp", {seatNumber, rowNumber, seatStatus, onSeatPicked, _id});

  const [isPicked, setIsPicked] = useState<boolean>(false)
  const [seatColor, setSeatColor] = useState<string>((seatStatus === "free") ? "seagreen" : "grey")


  function handleSeatPicking(_rowNumber: string, _seatNumber: string, _seatStatus: string, _id: string) {
    try {
      if (_seatStatus === "free") {
        const newPickedState = !isPicked
        const newSeatColor = newPickedState ? "gold" : "seagreen"
        setIsPicked(newPickedState)
        setSeatColor(newSeatColor)
        onSeatPicked(_id, newPickedState)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const backgroundColor = { backgroundColor: seatColor }
  const cursor = { cursor: (seatStatus === "free") ? "pointer" : "default" }

  return (
    <div className="seat" style={{ ...backgroundColor, ...cursor }} onClick={() => handleSeatPicking(rowNumber, seatNumber, seatStatus, _id)}>{seatNumber}</div>
  );
};

export default Seat
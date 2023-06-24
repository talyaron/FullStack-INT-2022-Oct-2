//React
import { FC } from "react";

//Interfaces
import { IGenericCard } from "./IGenericCard";

//Mui
import { Card, CardContent } from "@mui/material";

//CSS
import './GenericCard.css'

const GenericCard: FC<IGenericCard> = ({ cardInfo }) => {
  return (
    <div>
      <Card className="cardContainer">
        <CardContent className="cardContent">
          <img className="concertImg" src={cardInfo.img} alt={cardInfo.label} />
          <div className="concertLabel">{cardInfo.label}</div>
          <div>{cardInfo.date}</div>
          <div>{cardInfo.price}$</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenericCard;

//React
import { FC } from "react";

//Interfaces
import { IGenericCard } from "./IGenericCard";

//Mui
import { Button, Card, CardContent } from "@mui/material";

//CSS
import "./GenericCard.css";

const GenericCard: FC<IGenericCard> = ({ cardInfo, cardBtnTitle, needBtn}) => {
  return (
    <div>
      <Card className="cardContainer">
        <CardContent className="cardContent">
          <img className="concertImg" src={cardInfo.img} alt={cardInfo.label} />
          <div className="concertLabel">{cardInfo.label}</div>
          <div>{cardInfo.date}</div>
          <div>{cardInfo.price}$</div>
          {needBtn ? <Button variant="contained">{cardBtnTitle}</Button> : <></>}
        </CardContent>
      </Card>
    </div>
  );
};

export default GenericCard;

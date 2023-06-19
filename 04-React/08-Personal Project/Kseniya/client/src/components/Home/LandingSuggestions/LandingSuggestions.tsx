import { FC } from "react";
import "./LandingSuggestions.css";
import { CONCERTS_TEST } from "../../../consts/concerts.data";
import { Card, CardContent, Grid } from "@mui/material";

const LandingSuggestions: FC = () => {
  return (
    <div>
      <div className="mainTitle">Popular concerts right now</div>
      <Grid container spacing={3} columns={15} className="concertsContainer">
        {/* need to get code from beb for the X scroll */}
        {CONCERTS_TEST.map((concert, index) => (
          <Grid item xs={3} key={index}> 
            <Card>
              <CardContent className="concertWrapper">
                <img src={concert.img} alt={concert.label} className="concertImg"/>
                <div className="concertLabel">{concert.label}</div>
                <div className="concertDate">{concert.date}</div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LandingSuggestions;

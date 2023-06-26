import { FC, useEffect, useState } from "react";
import "./LandingSuggestions.css";
import { Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import { IEvent } from "../../../pages/Admin/AllEvents/IEvent";
import GenericCard from "../../../Generics/GenericCard/GenericCard";

const LandingSuggestions: FC = () => {
  const [allEvents, setAllEvents] = useState<IEvent[]>([] as IEvent[]);
  const [allConcerts, setAllConcerts] = useState<IEvent[]>([] as IEvent[]);
  const [allFestivals, setAllFestivals] = useState<IEvent[]>([] as IEvent[]);

  useEffect(() => {
    axios.get("http://localhost:3000/event/getAll").then(({ data }) => {
      setAllEvents(data);
    });
    const concerts = allEvents.filter((event) => event.eventType == "concert");
    setAllConcerts(concerts);

    const festivals = allEvents.filter(
      (event) => event.eventType == "festival"
    );
    setAllFestivals(festivals);
  }, [allEvents]);

  return (
    <div>
      <div className="mainTitle">Popular concerts right now:</div>
      <Grid container spacing={3} columns={15} className="concertsContainer">
        {/* need to get code from beb for the X scroll */}
        {allConcerts.map((concert, index) => (
          <Grid item xs={3} key={index}>
            <GenericCard cardInfo={concert} needBtn={false} />
          </Grid>
        ))}
      </Grid>
      <div className="mainTitle">Popular festivals right now:</div>
      <Grid container spacing={3} columns={15} className="concertsContainer">
        {allFestivals.map((festival, index) => (
          <Grid item xs={3} key={index}>
            <GenericCard cardInfo={festival} needBtn={false} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LandingSuggestions;

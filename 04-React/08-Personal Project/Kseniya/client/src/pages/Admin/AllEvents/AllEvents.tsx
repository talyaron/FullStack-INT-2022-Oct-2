//React
import { useEffect, useState, FC } from "react";

//Mui
import { Button, Grid } from "@mui/material";

//Interfaces
import { IEvent } from "./IEvent";

// Axios
import axios from "axios";

// Components
import GenericCard from "../../../Generics/GenericCard/GenericCard";

//CSS
import "./AllEvents.css";

const AllEvents: FC = () => {
  const [allEvents, setAllEvents] = useState<IEvent[]>([] as IEvent[]);

  const deleteEvent = (_id: string) => {
    console.log(_id);
    axios
      .delete(`http://localhost:3000/event/delete/${_id}`)
      .then(({ data }) => {
        setAllEvents(data);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/event/getAll").then(({ data }) => {
      setAllEvents(data);
    });
  }, [allEvents]);
  return (
    <div id="wrapper">
      <div id="header">All The Events:</div>
      <Grid container columns={15} spacing={2}>
        {allEvents.map((event, index) => (
          <Grid key={index} item xs={3}>
            <GenericCard
              cardInfo={event}
              cardBtnTitle="Delete Event"
              cardBtnFunc={() => {
                deleteEvent(event._id);
              }}
              needBtn={true}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllEvents;

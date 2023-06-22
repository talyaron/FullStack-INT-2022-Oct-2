import { FC, useEffect, useState } from "react";
import GenericForm from "../../../Generics/GenericForm/GenericForm";
import { CREATE_EVENT_FIELDS } from "./createEvent.data";
import { IEvent } from "./IEvent";
import axios from "axios";
import { Card, CardContent, Grid } from "@mui/material";

const CreateEvent: FC = () => {
  const [eventInfo, setEventInfo] = useState<IEvent>({} as IEvent);
  const [allEvents, setAllEvents] = useState<IEvent[]>([] as IEvent[]);

  const handleFieldChange = (value: string, property: string) => {
    setEventInfo((prev) => {
      return { ...prev, [property]: value };
    });
  };

  const createEvent = () => {
    axios.post("http://localhost:3000/event/create", eventInfo).then(() => {});
  };

  useEffect(() => {
    axios.get("http://localhost:3000/event/getAll").then(({ data }) => {
      setAllEvents(data);
    });
  }, [allEvents]);

  return (
    <div>
      <GenericForm
        formFields={CREATE_EVENT_FIELDS}
        buttonTitle="Create Event"
        buttonFunc={() => {
          createEvent();
        }}
        changeFieldFunc={handleFieldChange}
      />
      <div>All The Events:</div>
      <Grid container columns={15} spacing={2}>
        {allEvents.map((event, index) => (
          <Grid key={index} item xs={3} >
            <Card>
              <CardContent className="concertWrapper">
                <img src={event.img} alt={event.title} className="concertImg" />
                <div className="concertLabel">{event.title}</div>
                <div className="concertDate">{event.date}</div>
                <div>{event.price}$</div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CreateEvent;

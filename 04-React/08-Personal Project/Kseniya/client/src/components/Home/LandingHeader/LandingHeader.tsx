import { Autocomplete, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import "./LandingHeader.css";
import axios from "axios";
import { IEvent } from "../../../pages/Admin/AllEvents/IEvent";

const LandingHeader: FC = () => {
  const [allEvents, setAllEvents] = useState<IEvent[]>([] as IEvent[]);

  useEffect(() => {
    axios.get("http://localhost:3000/event/getAll").then(({ data }) => {
      setAllEvents(data);
    });
  }, []);

  return (
    <div className="HeaderContainer">
      <div>
        <div className="HeaderIntro">
          Experience the pulse of live music and the euphoria of festivals on
          our vibrant website, where every beat and celebration comes alive
        </div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={allEvents}
          popupIcon={false}
          fullWidth
          renderInput={(params) => (
            <TextField {...params} label="Search for any event..." />
          )}
        />
      </div>
    </div>
  );
};

export default LandingHeader;

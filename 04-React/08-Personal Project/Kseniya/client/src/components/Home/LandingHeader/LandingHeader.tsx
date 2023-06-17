import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { CONCERTS_TEST } from "../../../consts/concerts.data";
import "./LandingHeader.css";

const LandingHeader: FC = () => {
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
          options={CONCERTS_TEST}
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

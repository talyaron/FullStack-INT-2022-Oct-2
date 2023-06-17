import { FC } from "react";
import { IGenericForm } from "./IGenericForm";
import { Button, TextField } from "@mui/material";
import "./GenericForm.css";

const GenericForm: FC<IGenericForm> = ({
  formFields,
  buttonFunc,
  buttonTitle,
}) => {
  return (
    <div className="formContainer">
      {formFields.map((field, index) => (
        <div className="singleField">
          <TextField className="singleField" key={index} label={field.label} />
        </div>
      ))}
      <Button
        variant="contained"
        onClick={() => {
          buttonFunc();
        }}
      >
        {buttonTitle}
      </Button>
    </div>
  );
};

export default GenericForm;

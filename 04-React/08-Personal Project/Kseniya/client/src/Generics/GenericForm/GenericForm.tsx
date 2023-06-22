import { FC, useState } from "react";
import { IGenericForm } from "./IGenericForm";
import { Button, TextField } from "@mui/material";
import "./GenericForm.css";

const GenericForm: FC<IGenericForm> = ({
  formFields,
  buttonFunc,
  buttonTitle,
  changeFieldFunc,
}) => {
  return (
    <div className="formContainer">
      {formFields.map((field, index) => (
        <div className="singleField" key={index}>
          <TextField
            type={field.type}
            className="singleField"
            label={field.label}
            onChange={(e) => {
              changeFieldFunc(e.target.value, field.property);
            }}
          />
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

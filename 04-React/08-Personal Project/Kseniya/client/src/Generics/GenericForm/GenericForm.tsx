import { FC } from "react";
import { IGenericForm } from "./IGenericForm";
import { Button, TextField } from "@mui/material";
import "./GenericForm.css";

const GenericForm: FC<IGenericForm> = ({
  formFields,
  buttonFunc,
  buttonTitle,
  fieldInfo,
  setFieldInfo,
}) => {
  const handleChange = (value: string, property: string) => {
    setFieldInfo((prev) => {
      return { ...prev, [property]: value };
    });
  };
  return (
    <div className="formContainer">
      {formFields.map((field, index) => (
        <div className="singleField" key={index}>
          <TextField
            className="singleField"
            label={field.label}
            onChange={(e) => {
              handleChange(e.target.value, field.property);
            }}
          />
        </div>
      ))}
      <Button
        variant="contained"
        onClick={() => {
          buttonFunc(fieldInfo)
        }}
      >
        {buttonTitle}
      </Button>
    </div>
  );
};

export default GenericForm;

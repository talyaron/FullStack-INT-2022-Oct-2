import { FC, useEffect, useState } from "react";
import GenericForm from "../../../Generics/GenericForm/GenericForm";
import { CREATE_EVENT_FIELDS } from "./createEvent.data";
import { IEvent } from "../IEvent";
import axios from "axios";

const CreateEvent: FC = () => {
  const [eventInfo, setEventInfo] = useState<IEvent>({} as IEvent);

  const handleFieldChange = (value: string, property: string) => {
    setEventInfo((prev) => {
      return { ...prev, [property]: value };
    });
  };

  const createEvent = () => {
    axios.post("http://localhost:3000/event/create", eventInfo).then(() => {});
  };

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
    </div>
  );
};

export default CreateEvent;

import { FC } from "react";
import GenericForm from "../../Generics/GenericForm/GenericForm";
import { JOIN_FIELDS } from "../../consts/joinFields";

const Join: FC = () => {
  return (
    <div>
      <GenericForm
        formFields={JOIN_FIELDS}
        buttonTitle="Join"
        buttonFunc={() => {
          console.log("join");
        }}
      />
    </div>
  );
};

export default Join;

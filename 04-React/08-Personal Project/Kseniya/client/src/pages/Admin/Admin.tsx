//React
import { FC } from "react";

//components
import CreateEvent from "./CreateEvent/CreateEvent";
import AllEvents from "./AllEvents/AllEvents";

const Admin: FC = () => {
  return (
    <div>
      <CreateEvent />
      <AllEvents />
    </div>
  );
};

export default Admin;

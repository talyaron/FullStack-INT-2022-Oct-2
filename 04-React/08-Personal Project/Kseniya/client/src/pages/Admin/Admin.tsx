//React
import { FC } from "react";

//components
import CreateEvent from "./CreateEvent/CreateEvent";
import AllEvents from "./AllEvents/AllEvents";
import AllUsers from "./AllUsers/AllUsers";

const Admin: FC = () => {
  return (
    <div>
      <CreateEvent />
      <AllEvents />
      <AllUsers/>
    </div>
  );
};

export default Admin;

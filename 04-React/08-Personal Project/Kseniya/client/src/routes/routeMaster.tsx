import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const routeMaster = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
]);

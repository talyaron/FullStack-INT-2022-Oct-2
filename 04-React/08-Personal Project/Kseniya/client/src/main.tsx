import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteMaster from "./routes/routeMaster";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { UserInfoProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserInfoProvider>
      <ThemeProvider theme={theme}>
        <RouteMaster />
      </ThemeProvider>
    </UserInfoProvider>
  </React.StrictMode>
);

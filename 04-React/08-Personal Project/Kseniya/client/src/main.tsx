import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteMaster from "./routes/routeMaster";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouteMaster />
    </ThemeProvider>
  </React.StrictMode>
);

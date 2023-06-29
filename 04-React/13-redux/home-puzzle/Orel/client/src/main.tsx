import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { store } from "./app/store"
import App from "./App"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(

    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>

)

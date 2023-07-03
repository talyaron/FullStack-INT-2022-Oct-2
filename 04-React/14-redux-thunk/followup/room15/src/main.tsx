import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddImages from "./view/pages/AddImages"
import ViewImages from "./view/pages/ViewImages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <AddImages />,
  },
  {
    path: "/view",
    element:<ViewImages />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

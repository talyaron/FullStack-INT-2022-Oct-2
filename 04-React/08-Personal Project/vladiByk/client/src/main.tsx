import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.scss";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUser } from "./app/userSlice";

store.dispatch(fetchUser());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

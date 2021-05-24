import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./Components/App";
import "./index.css";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={ store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

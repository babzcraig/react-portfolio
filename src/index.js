import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

const scrollToTop = () => {
  console.log("ran?");
  window.scrollTo(0, 0);
  // if ("scrollRestoration" in history) {
  //   history.scrollRestoration = "manual";
  // }
};

ReactDOM.render(
  <BrowserRouter onUpdate={scrollToTop}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

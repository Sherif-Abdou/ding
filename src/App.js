import React from "react";
import logo from "./logo.svg";
import { refreshAsync } from "./redux/actions";
import store from "./redux/store";
import "./App.css";

function App() {
  store.dispatch(refreshAsync());
  return <div className="App"></div>;
}

export default App;

import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router";
import Router from "../Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

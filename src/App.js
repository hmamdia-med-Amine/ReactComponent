import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Adress";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
function App() {
  return (
    <div className="App">
      <FullName />
      <ProfilPhoto />
      <Adress />
    </div>
  );
}

export default App;

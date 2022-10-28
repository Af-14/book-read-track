
import React from "react";


import logo from "./logo.svg";
import "./App.css";


// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import MyList from "./Components/MyList";
import Profile from "./Components/Profile";


function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      {/* <MyList /> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;

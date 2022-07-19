
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";


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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      //test commit
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Header />} />
          <Route exact path="MyList" element={<MyList />} />
          <Route exact path="Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <MainContainer />
    </div>
  );
}

export default App;

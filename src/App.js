import React from "react";
import "./App.css";
import Clock from "./Components/Clock";
import Weather from "./Components/Weather";
import GoogleSearch from "./Components/GoogleSearch";
import { Wrapper } from "./StylingFolder/style";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <div>
          <Clock />
          <GoogleSearch />
          <Weather/>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;

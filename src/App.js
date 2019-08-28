import React from "react";
import "./App.css";
import Clock from "./Components/Clock";
import Weather from "./Components/Weather";
import Youtube from "./Components/YouTubePlayer/YouTubeMusic";
import GoogleSearch from "./Components/GoogleSearch";
import {Wrapper} from "./StylingFolder/style"

function App() {

  

  return (
    <div className="App">
      <Wrapper>
        <h1>This is the Peaceful Homepage!!!!</h1>
        <div>
          <Clock />
          <Weather />
          <Youtube />
          <GoogleSearch />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;

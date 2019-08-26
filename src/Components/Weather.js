import React, { useState, useEffect } from "react";
import { Wrapper } from "../StylingFolder/style";
import axios from "axios";

function Weather(props) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 1000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      setLatitude(crd.latitude);
      setLongitude(crd.longitude);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [latitude, longitude]);

  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=5dac0afa27fec8d40372cc6e258f2a8b`
  
  useEffect(async  () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
  }, []);

  return (
    <Wrapper>
      <div>
        <h2>WEATHER!!!!</h2>
        <p>Latitude:{latitude}</p>
        <p>Longitude:{longitude}</p>
        <p>City:{}</p>
        <p>Forcast:{}</p>
      </div>
    </Wrapper>
  );
}

export default Weather;

import React, { useState, useEffect } from "react";
import {
  WeatherWrapper,
  WeatherImg,
  WeatherInfo
} from "../StylingFolder/style";
import axios from "axios";
import Below0 from "../Assets/WeatherImgs/Below0.jpg";
import Above73 from "../Assets/WeatherImgs/Above73.jpg";

function Weather(props) {
  //Sets state
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [data, setData] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [description, setDescription] = useState("");

  //Fetches location.
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 2000,
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

  //Fetches weather data based on coordinates and sets the state
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=5dac0afa27fec8d40372cc6e258f2a8b`;
    async function fetchData() {
      const response = await axios(url);
      const data = response.data;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const description = data.weather[0].description;
      setData(data);
      setTemperature(temperature);
      setHumidity(humidity);
      setDescription(description);
    }
    fetchData();
  }, [latitude, longitude]);

  //Converts Kelvin to Celsius.
  function convertKelvinToCelsius(num) {
    const Celsius = num - 273.25;
    return Math.round(Celsius);
  }
  function convertKelvintoFahrenheit(num) {
    const Celsius = num - 273.25;
    return Math.round(Celsius * 1.8 + 32);
  }
  //Changes background based on temperature and weather.
  function changeImg(num) {
    if (num > -30 && num <= 0) {
      return `url(${Below0})`;
    } else if (num > 1 && num <= 30) {
      return `url(${Below0})`;
    } else if (num > 31 && num <= 59) {
      return `url(${Below0})`;
    } else if (num > 60 && num <= 72) {
      return `url(${Below0})`;
    } else if (num > 73 && num <= 100) {
      return `url(${Above73})`;
    }
  }

  return (
    <WeatherWrapper>
      <WeatherImg
        style={{
          backgroundImage: `${changeImg(
            convertKelvintoFahrenheit(temperature)
          )}`
        }}
      >
        <WeatherInfo>
          <h2>WEATHER!!!!</h2>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <h3>Today:</h3>
          <p>{description}</p>
          <h3>Temperature:</h3>
          <p>Celsius: {convertKelvinToCelsius(temperature)}°</p>
          <p>Fahrenheit: {convertKelvintoFahrenheit(temperature)}°</p>
          <h3>Humidity:</h3>
          <p>{humidity}%</p>
        </WeatherInfo>
      </WeatherImg>
    </WeatherWrapper>
  );
}

export default Weather;

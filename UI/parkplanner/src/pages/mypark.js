import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Mypark() {
  // const location = useLocation();
  // console.log(location)
  // get state from navigate in index.js
  const { state } = useLocation();
  const [parkCode, setParkCode] = useState(state);
  console.log(parkCode);

  // get park data from API
  const [parkData, setParkData] = useState([]);

  useEffect(() => {
    const getParkData = async () => {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=y02YQZIE073ut1YQNZMW5vYHnHA4oxLRoG99EIV9` // replace with Django API
      );
      const data = await response.json();
      setParkData(data.data[0]);
    };
    getParkData();
  }, [parkCode]);

  console.log(parkData);

  return (
    <div>
      <h1>{parkData.fullName}</h1>
      <p className="description">{parkData.description}</p>
      <p class="directions">{parkData.directionsInfo}</p>
      <p class="directions-url">
        <strong>View directions here: </strong> {parkData.directionsUrl}
      </p>
      <p class="coordinates-lat">
        <strong>Latitude: </strong>
        {parkData.latitude}
      </p>
      <p class="coordinates-lon">
        <strong>Longitude: </strong> {parkData.longitude}
      </p>
      <p class="data-url">
        <strong>Visit this URL for data: </strong> {parkData.url}
      </p>
      <p class="weather-info">
        <strong>Weather information: </strong> {parkData.weatherInfo}
      </p>
    </div>
  );
}

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
        `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=` // replace with Django API
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
      <p>{parkData.description}</p>
      <p>{parkData.directionsInfo}</p>
      <p>{parkData.directionsUrl}</p>
      <p>{parkData.latitude}</p>
      <p>{parkData.longitude}</p>
      <p>{parkData.url}</p>
      <p>{parkData.weatherInfo}</p>
    </div>
  );
}

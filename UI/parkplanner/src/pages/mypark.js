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
        `http://localhost:8000/park_db/${parkCode}/fullname`,
        { method: "GET" }
      );
      const data = await response.json();
      setParkData(data.data);
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

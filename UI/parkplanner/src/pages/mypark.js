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
  const [alertData, setAlertData] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [eventsData, setEventsData] = useState([]);

  // state for accordion menus
  const [isActiveAlerts, setIsActiveAlerts] = useState(false);
  const [isActiveAmenities, setIsActiveAmenities] = useState(false);
  const [isActiveEvents, setIsActiveEvents] = useState(false);
  
  // get park info
  useEffect(() => {
    const getParkData = async () => {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=y02YQZIE073ut1YQNZMW5vYHnHA4oxLRoG99EIV9`
      );
      const data = await response.json();
      setParkData(data.data[0]);
    };
    getParkData();
  }, [parkCode]);

  // get alerts info
  useEffect(() => {
    const getAlertData = async () => {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=y02YQZIE073ut1YQNZMW5vYHnHA4oxLRoG99EIV9`
      );
      const data = await response.json();
      setAlertData(data.data);
    };
    getAlertData();
  }, [parkCode]);

  // get amenities info
  useEffect(() => {
    const getAmenitiesData = async () => {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/amenities?parkCode=${parkCode}&api_key=y02YQZIE073ut1YQNZMW5vYHnHA4oxLRoG99EIV9`
      );
      const data = await response.json();
      setAmenitiesData(data.data);
    };
    getAmenitiesData();
  }, [parkCode]);

  // get events info
  useEffect(() => {
    const getEventsData = async () => {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&api_key=y02YQZIE073ut1YQNZMW5vYHnHA4oxLRoG99EIV9&dateStart=${new Date().toISOString().split('T')[0]}`
      );
      const data = await response.json();
      setEventsData(data.data);
    };
    getEventsData();
  }, [parkCode]);

  return (
    <>
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

      {/* Alerts accordion div */}
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActiveAlerts(!isActiveAlerts)}>
            <h2>Alerts {isActiveAlerts ? '-' : '+'}</h2>
          </div>
          {isActiveAlerts && <div className="accordion-content">{
            <ul>
              {alertData.map((alert) =>
                <>
                  <b>{alert.title}</b>
                  <li>{alert.description}</li>
                </>
              )}
            </ul>
          }</div>}
        </div>
      </div>

      {/* Amenities accordion div */}
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActiveAmenities(!isActiveAmenities)}>
            <h2>Amenities {isActiveAmenities ? '-' : '+'}</h2>
          </div>
          {isActiveAmenities && <div className="accordion-content">{
            <ul>
              {amenitiesData.map((amenity) =>
                <>
                  <li>{amenity.name}</li>
                </>
              )}
            </ul>
          }</div>}
        </div>
      </div>

      {/* Events accordion div */}
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActiveEvents(!isActiveEvents)}>
            <h2>Upcoming Events {isActiveEvents ? '-' : '+'}</h2>
          </div>
          {isActiveEvents && <div className="accordion-content">{
            <ul>
              {eventsData.map((event) =>
                <>
                  <b>{event.title} | </b>
                  <b>{event.datestart} | </b>
                  <b>{event.times[0].timestart} </b>
                  <p>{event.description.replace(/(<([^>]+)>)/ig, '')}</p>
                </>
              )}
            </ul>
          }</div>}
        </div>
      </div>

    </>
  );
}

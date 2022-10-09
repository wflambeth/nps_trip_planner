import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  //debugger;
  const [parkCode, setParkCode] = useState("");
  const navigate = useNavigate();

  const getData = async (e) => {
    e.preventDefault();
    navigate("/mypark", { state: parkCode, parkCode });
  };

  return (
    <div id="body">
      <body>
        <nav id="articles">
          <div id="nav-buttons">
            <a href="/">Choose Parks</a>
            <a href="#">Choose Amenities</a>
          </div>
        </nav>
        <h2>Welcome to the National Parks Trip Planner!</h2>
        <p>We aim to make your travel planning easier.</p>
        <p>
          Choose the park you want to visit, then choose additional options to
          optimize your visit!
        </p>
        <p>Most importantly, have fun!</p>
        <br />
        <br />
        <form>
          <label for="choose-park">Choose the parks you want to visit:</label>
          <br />
          <select
            name="nationalParks"
            id="choose-park"
            value={parkCode}
            onChange={(e) => setParkCode(e.target.value)}
          >
            <option value="" hidden>
              Pick a Park!
            </option>
            <option value="acad">Acadia</option>
            <option value="npsa">American Samoa</option>
            <option value="arch">Arches</option>
            <option value="badl">Badlands</option>
            <option value="bibe">Big Bend</option>
            <option value="bisc">Biscayne</option>
            <option value="blca">Black Canyon of the Gunnison</option>
            <option value="brca">Bryce Canyon</option>
            <option value="cany">Canyonlands</option>
            <option value="care">Capitol Reef</option>
            <option value="cave">Carlsbad Caverns</option>
            <option value="chis">Channel Islands</option>
            <option value="cong">Congaree</option>
            <option value="crla">Crater Lake</option>
            <option value="cuva">Cuyahoga Valley</option>
            <option value="deva">Death Valley</option>
            <option value="dena">Denali</option>
            <option value="drto">Dry Tortugas</option>
            <option value="ever">Everglades</option>
            <option value="gaar">Gates of the Arctic</option>
            <option value="jeff">Gateway Arch</option>
            <option value="glac">Glacier</option>
            <option value="glba">Glacier Bay</option>
            <option value="grca">Grand Canyon</option>
            <option value="grte">Grand Teton</option>
            <option value="grba">Great Basin</option>
            <option value="grsa">Great Sand Dunes</option>
            <option value="grsm">Great Smoky Mountains</option>
            <option value="gumo">Guadalupe Mountains</option>
            <option value="hale">Haleakalā</option>
            <option value="havo">Hawaii Volcanoes</option>
            <option value="hosp">Hot Springs</option>
            <option value="indu">Indiana Dunes</option>
            <option value="isro">Isle Royale</option>
            <option value="jotr">Joshua Tree</option>
            <option value="katm">Katmai</option>
            <option value="kefj">Kenai Fjords</option>
            <option value="seki">Kings Canyon</option>
            <option value="kova">Kobuk Valley</option>
            <option value="lacl">Lake Clark</option>
            <option value="lavo">Lassen Volcanic</option>
            <option value="maca">Mammoth Cave</option>
            <option value="meve">Mesa Verde</option>
            <option value="mora">Mount Rainier</option>
            <option value="neri">New River Gorge</option>
            <option value="noca">North Cascades</option>
            <option value="olym">Olympic</option>
            <option value="pefo">Petrified Forest</option>
            <option value="pinn">Pinnacles</option>
            <option value="redw">Redwood</option>
            <option value="romo">Rocky Mountain</option>
            <option value="sagu">Saguaro</option>
            <option value="seki">Sequoia</option>
            <option value="shen">Shenandoah</option>
            <option value="thro">Theodore Roosevelt</option>
            <option value="viis">Virgin Islands</option>
            <option value="voya">Voyageurs</option>
            <option value="whsa">White Sands</option>
            <option value="wica">Wind Cave</option>
            <option value="wrst">Wrangell St. Elias</option>
            <option value="yell">Yellowstone</option>
            <option value="yose">Yosemite</option>
            <option value="zion">Zion</option>
          </select>
          <br />
          <br />
          <button onClick={getData}>Submit</button>
        </form>
      </body>
    </div>
  );
}

import React from "react";
import "../styles/header-styles.css";
function Header() {
  return (
    <div>
      <header>
        <h1>National Parks Trip</h1>
      </header>

      <nav id="articles">
        <div>
          <a href="/">Choose Parks</a>
          <a href="#">Choose amenities</a>
          <a href="#">Check your calendar</a>
          <a href="#">Submit</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;

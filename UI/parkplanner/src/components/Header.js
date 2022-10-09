import React from "react";
import "../styles/header-styles.css";
function Header() {
  return (
    <div id="head">
      <header>
        <nav id="articles">
          <div id="nav-buttons">
            <a href="/">Choose Parks</a>
            <a href="#">Choose amenities</a>
            <a href="#">Check your calendar</a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;

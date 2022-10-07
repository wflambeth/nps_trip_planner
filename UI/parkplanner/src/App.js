import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Mypark from "./pages/mypark";

function App() {
  const parkData = useState([]);

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Index />
              </>
            }
          ></Route>
          <Route
            exact
            path="/mypark"
            element={
              <>
                <Mypark parkData={parkData} />
              </>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

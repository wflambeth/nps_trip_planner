import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Mypark from "./pages/mypark";
import "./styles/style.css";

function App() {

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
                <Mypark />
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

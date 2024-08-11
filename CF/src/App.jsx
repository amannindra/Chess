// import Board from "./Pages/Game/board.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import React from "react";
("use strict");
function App() {
  // if (!data) return <div>Loading...</div>;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home page="choose" />} />
          <Route path="/online" element={<Home page="online" />} />
          <Route path="/friend" element={<Home page="friend"/>} />
          <Route path="/computer" element={<Home page="computer" />} />
          {/* <Route path="/play" element={<Play />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

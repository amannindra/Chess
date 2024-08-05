// import Board from "./Pages/Game/board.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import React from "react";
("use strict");
function App() {
  const [data, setData] = useState(null);
  const [game, setGame] = useState(null);
  const [piecePosition, setpiecePosition] = useState(null);
  const [currentPiece, setcurrentPiece] = useState(null);
  const [currentPlayer, setcurrentPlayer] = useState(null);
  const [checkMate, setCheckMate] = useState(null);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/chessData")
  //     .then((res) => res.json())
  //     .then((datas) => {
  //       setpiecePosition(datas.previousPosition);
  //       setcurrentPiece(datas.currentPiece);
  //       setcurrentPlayer(datas.currentPlayer);
  //       setCheckMate(datas.checkMate);
  //       setGame(datas.game);
  //       setData(datas);
  //       console.log(datas);
  //     })
  //     .catch((err) => {
  //       console.log(piecePosition);
  //       console.error(err);
  //     });
  // }, []);

  const handleUpload = (data) => {
    console.log("handleUpload");
    axios({
      url: "http://127.0.0.1:5000/uploadData",
      method: "POST",
      data: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // if (!data) return <div>Loading...</div>;

  if (checkMate) {
    alert("CHECKMATE");
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/play" element={<Play />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

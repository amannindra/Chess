// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Board from "./board.jsx";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/chessData")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
      
  });

  // useEffect(() => {
    
  // })
  const [game, setGame] = useState([
    [
      "bRook",
      "bKnight",
      "bBishop",
      "bQueen",
      "bKing",
      "bBishop",
      "bKnight",
      "bRook",
    ],
    ["bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn"],
    [
      "wRook",
      "wKnight",
      "wBishop",
      "wQueen",
      "wKing",
      "wBishop",
      "wKnight",
      "wRook",
    ],
  ]);
  const [piecePosition, setpiecePosition] = useState([null, null]);
  const [currentPiece, setcurrentPiece] = useState("W");
  const [currentPlayer, setcurrentPlayer] = useState("White");

  return (
    <>
      <Board
        setGame={setGame}
        game={game}
        currentPiece={currentPiece}
        setcurrentPiece={setcurrentPiece}
        currentPlayer={currentPlayer}
        setcurrentPlayer={setcurrentPlayer}
        piecePosition={piecePosition}
        setpiecePosition={setpiecePosition}
      />
    </>
  );
}

export default App;

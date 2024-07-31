import "./App.css";
import Board from "./board.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  const [piecePosition, setpiecePosition] = useState(null);
  const [currentPiece, setcurrentPiece] = useState(null);
  const [currentPlayer, setcurrentPlayer] = useState(null);
  const [checkMate, setCheckMate] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/chessData")
      .then((res) => res.json())
      .then((datas) => {
        setpiecePosition(datas.previousPosition);
        setcurrentPiece(datas.currentPiece);
        setcurrentPlayer(datas.currentPlayer);
        setCheckMate(datas.checkMate);
        setData(datas);
        console.log(datas);
      })
      .catch((err) => {
        console.log(piecePosition);
        console.error(err);
      });
  }, []);

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

  if (!data) return <div>Loading...</div>;

  if (checkMate) {
    alert("CHECKMATE");
  }
  return (
    <>
      <Board
        game={data.game}
        currentPiece={currentPiece}
        setcurrentPiece={setcurrentPiece}
        currentPlayer={currentPlayer}
        setcurrentPlayer={setcurrentPlayer}
        piecePosition={piecePosition}
        setpiecePosition={setpiecePosition}
        checkMate={checkMate}
        setCheckMate={setCheckMate}
        onClick={() => handleUpload(data)}
      />
    </>
  );
}

export default App;

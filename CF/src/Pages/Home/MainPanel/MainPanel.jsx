import "./MainPanel.css";
import React from "react";
import { useState, useEffect } from "react";
import Board from "./Game/board";
function MainPanel() {
  const [data, setData] = useState();
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
    ["None", "None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None", "None"],
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
  const [piecePosition, setpiecePosition] = useState(null);
  const [currentPiece, setcurrentPiece] = useState(null);
  const [currentPlayer, setcurrentPlayer] = useState("White");
  const [checkMate, setCheckMate] = useState(false);
  // const handleUpload = (data) => {
  //   console.log("handleUpload");
  //   axios({
  //     url: "http://127.0.0.1:5000/uploadData",
  //     method: "POST",
  //     data: JSON.stringify(data),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // if (checkMate) {
  //   alert("CHECKMATE");
  // }
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
  //       console.log("datas: " + datas);
  //     })
  //     .catch((err) => {
  //       console.log(piecePosition);
  //       console.error(err);
  //     });
  // }, []);

  return (
    <>
      <div className="MainPanel">
        <div className="display">
          <Board
            data={data}
            setData={setData}
            game={game}
            piecePosition={piecePosition}
            setpiecePosition={setpiecePosition}
            currentPiece={currentPiece}
            setcurrentPiece={setcurrentPiece}
            currentPlayer={currentPlayer}
            setcurrentPlayer={setcurrentPlayer}
            checkMate={checkMate}
            setCheckMate={setCheckMate}
            setGame={setGame}
          ></Board>
        </div>
      </div>
    </>
  );
}

export default MainPanel;

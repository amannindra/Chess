import "./MainPanel.css";
import React from "react";
import { useState, useEffect } from "react";

import Opponent from "./images/opponent.jpeg";

import Board from "./Game/board";
function MainPanel(props) {
  const [data, setData] = useState();
  const [game, setGame] = useState([
    [
      "BRook",
      "BKnight",
      "BBishop",
      "BQueen",
      "BKing",
      "BBishop",
      "BKnight",
      "BRook",
    ],
    ["BPawn", "BPawn", "BPawn", "BPawn", "BPawn", "BPawn", "BPawn", "BPawn"],
    ["None", "None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None", "None"],
    ["None", "None", "None", "None", "None", "None", "None", "None"],
    ["WPawn", "WPawn", "WPawn", "WPawn", "WPawn", "WPawn", "WPawn", "WPawn"],
    [
      "WRook",
      "WKnight",
      "WBishop",
      "WQueen",
      "WKing",
      "WBishop",
      "WKnight",
      "WRook",
    ],
  ]);
  const [gameState, setGameState] = useState({
    piecePosition: null,
    currentPiece: "A",
    currentPlayer: "White",
    checkMate: false,
    moves: [0, 0],
    checkMate: false,
  });

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
          <div className="player">
            <img src={Opponent} />
            <span className="playername">Opponent</span>
          </div>
          <Board
            enable={props.enable}
            data={data}
            setData={setData}
            game={game}
            setGame={setGame}
            gameState={gameState}
            setGameState={setGameState}
          ></Board>
          <div className="player">
            <img src={Opponent} />
            <span className="playername">You</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPanel;

"use strict";
import React, { useEffect } from "react";
import Piece from "./Piece.jsx";
import BBishop from "./Images/bBishop.png";
import BKing from "./Images/bKing.png";
import BKnight from "./Images/bKnight.png";
import BPawn from "./Images/bPawn.png";
import BQueen from "./Images/bQueen.png";
import BRook from "./Images/bRook.png";
import WQueen from "./Images/wQueen.png";
import WBishop from "./Images/wBishop.png";
import WRook from "./Images/wRook.png";
import WKnight from "./Images/wKnight.png";
import WKing from "./Images/wKing.png";
import WPawn from "./Images/wPawn.png";
import "./board.css";

// function start(setGame) {
//   for (let x = 0; x < 8; x++) {
//     const row = [];
//     for (let y = 0; y < 8; y++) {
//       return;
//     }
//   }
// }

function Board(props) {
  // const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
  // const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let boardGame = [];
  let num = 0;
  const getImageForPiece = (piece) => {
    switch (piece) {
      case "BRook":
        return BRook;
      case "BKnight":
        return BKnight;
      case "BBishop":
        return BBishop;
      case "BQueen":
        return BQueen;
      case "BKing":
        return BKing;
      case "BPawn":
        return BPawn;
      case "WRook":
        return WRook;
      case "WKnight":
        return WKnight;
      case "WBishop":
        return WBishop;
      case "WQueen":
        return WQueen;
      case "WKing":
        return WKing;
      case "WPawn":
        return WPawn;
      default:
        return null;
    }
  };
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // console.log("This is: " + i + ":" + j + ": (" + props.game[i][j] + ")");
      num += 1;
      const piece = props.game[i][j];
      const image = getImageForPiece(piece);
      boardGame.push(
        <Piece
          key={`${i}-${j}`} //No change here
          num={num}
          enable={true}
          xposition={i}
          yposition={j}
          game={props.game}
          setGame={props.setGame}
          Character={image}
          gameState={props.gameState}
          setgameState={props.setgameState}
        />
      );
    }
  }

  return <div className="chessboard">{boardGame}</div>;
}

export default Board;

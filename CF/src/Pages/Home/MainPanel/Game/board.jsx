"use strict";
import React from "react";
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

function Board(props) {
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

  const renderBoard = () => {
    const boardGame = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const piece = props.game[i][j];
        const image = getImageForPiece(piece);

        boardGame.push(
          <Piece
            key={`${i}-${j}`}
            enable={props.enable}
            xposition={i}
            yposition={j}
            game={props.game}
            setGame={props.setGame}
            Character={image}
            gameState={props.gameState}
            setGameState={props.setGameState}
          />
        );
      }
    }
    return boardGame;
  };

  return <div className="chessboard">{renderBoard()}</div>;
}

export default Board;

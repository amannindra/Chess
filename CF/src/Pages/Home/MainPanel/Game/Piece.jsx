"use strict";
import React from "react";
import { useState } from "react";

function Piece(props) {
  function canMovePiece(
    currentPiece,
    piecePosition,
    targetX,
    targetY,
    game,
    currentPlayer
  ) {
    if (!currentPiece) return false; // No piece selected

    // Extract the piece color ('w' for white, 'b' for black)
    const pieceColor = currentPiece[0];

    // Check if it's the correct player's turn
    if (
      (pieceColor === "w" && currentPlayer !== "White") ||
      (pieceColor === "b" && currentPlayer !== "Black")
    ) {
      return false; // Not this player's turn
    }

    // Define movement rules for each piece type
    switch (currentPiece) {
      case "bRook":
      case "wRook":
        return canMoveRook(piecePosition, targetX, targetY, game);
      case "bKnight":
      case "wKnight":
        return canMoveKnight(piecePosition, targetX, targetY);
      case "bBishop":
      case "wBishop":
        return canMoveBishop(piecePosition, targetX, targetY, game);
      case "bQueen":
      case "wQueen":
        return canMoveQueen(piecePosition, targetX, targetY, game);
      case "bKing":
      case "wKing":
        return canMoveKing(piecePosition, targetX, targetY, game);
      case "bPawn":
        return canMovePawn(piecePosition, targetX, targetY, game, "b");
      case "wPawn":
        return canMovePawn(piecePosition, targetX, targetY, game, "w");
      default:
        return false;
    }
  }
  function canMoveRook([x, y], targetX, targetY, game) {
    // Rooks move in straight lines (either same row or same column)
    if (x !== targetX && y !== targetY) return false;

    // Check if path is clear (no other pieces in the way)
    if (x === targetX) {
      // Vertical move
      for (let i = Math.min(y, targetY) + 1; i < Math.max(y, targetY); i++) {
        if (game[x][i] !== "None") return false;
      }
    } else {
      // Horizontal move
      for (let i = Math.min(x, targetX) + 1; i < Math.max(x, targetX); i++) {
        if (game[i][y] !== "None") return false;
      }
    }

    return true;
  }

  function canMoveKnight([x, y], targetX, targetY) {
    // Knights move in L-shapes: two squares in one direction, one square in a perpendicular direction
    const dx = Math.abs(x - targetX);
    const dy = Math.abs(y - targetY);
    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  }

  function canMoveBishop([x, y], targetX, targetY, game) {
    // Bishops move diagonally
    if (Math.abs(x - targetX) !== Math.abs(y - targetY)) return false;

    // Check if path is clear
    const dx = targetX > x ? 1 : -1;
    const dy = targetY > y ? 1 : -1;
    let i = x + dx,
      j = y + dy;
    while (i !== targetX && j !== targetY) {
      if (game[i][j] !== "None") return false;
      i += dx;
      j += dy;
    }

    return true;
  }

  function canMoveQueen([x, y], targetX, targetY, game) {
    // Queens move like both a Rook and a Bishop
    return (
      canMoveRook([x, y], targetX, targetY, game) ||
      canMoveBishop([x, y], targetX, targetY, game)
    );
  }

  function canMoveKing([x, y], targetX, targetY, game) {
    // Kings move one square in any direction
    const dx = Math.abs(x - targetX);
    const dy = Math.abs(y - targetY);
    return dx <= 1 && dy <= 1;
  }

  function canMovePawn([x, y], targetX, targetY, game, color) {
    const direction = color === "w" ? -1 : 1; // White pawns move up, black pawns move down
    const startRow = color === "w" ? 6 : 1;

    if (
      x + direction === targetX &&
      y === targetY &&
      game[targetX][targetY] === "None"
    ) {
      return true; // Normal move
    }

    if (
      x + 2 * direction === targetX &&
      y === targetY &&
      game[targetX][targetY] === "None" &&
      x === startRow
    ) {
      return true; // Double move on first move
    }

    if (
      x + direction === targetX &&
      Math.abs(y - targetY) === 1 &&
      game[targetX][targetY] !== "None"
    ) {
      return true; // Capture move
    }

    return false;
  }

  const handleCurrentPiece = (
    currentPiece,
    setcurrentPiece,
    xposition,
    yposition,
    game,
    setGame,
    piecePosition,
    setpiecePosition,
    setcurrentPlayer,
    currentPlayer
  ) => {
    return (e) => {
      if (currentPiece) {
        if (
          canMovePiece(
            currentPiece,
            piecePosition,
            xposition,
            yposition,
            game,
            currentPlayer
          )
        ) {
          // Move piece logic
          const gameCopy = [...game];
          gameCopy[xposition][yposition] = currentPiece;
          gameCopy[piecePosition[0]][piecePosition[1]] = "None";
          setGame(gameCopy);
          setcurrentPiece(null);
          setcurrentPlayer(currentPlayer === "White" ? "Black" : "White");
        }
      } else {
        if (game[xposition][yposition] !== "None") {
          setcurrentPiece(game[xposition][yposition]);
          setpiecePosition([xposition, yposition]);
        }
      }
    };
  };

  let numbers = props.xposition + props.yposition; // + 2
  // console.log(typeof props.setGame);
  const [isHovered, setIsHovered] = useState(false);
  let colors = numbers % 2 == 0 ? "cell green-cell" : "cell white-cell";

  if (props.xposition == 0 && props.yposition == 0) {
    colors += " topleftborder";
  } else if (props.xposition == 7 && props.yposition == 0) {
    colors += " bottomleftborder";
  } else if (props.xposition == 7 && props.yposition == 7) {
    colors += " bottomrightborder";
  } else if (props.xposition == 0 && props.yposition == 7) {
    colors += " toprightborder";
  }
  return (
    <div
      className={colors}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered && props.enable ? "yellow" : null }}
      id={props.xposition + "." + props.yposition}
      onClick={handleCurrentPiece(
        props.currentPiece,
        props.setcurrentPiece,
        props.xposition,
        props.yposition,
        props.game,
        props.setGame,
        props.piecePosition,
        props.setpiecePosition,
        props.setcurrentPlayer,
        props.currentPlayer
      )}
    >
      <div className="Numbers"> {props.xposition + "." + props.yposition} </div>
      <img src={props.Character ? props.Character : null} />
    </div>
  );
}

export default Piece;

"use strict";
import React from "react";
import { useState } from "react";
import canMovePiece from "./canMovePiece";

function Piece(props) {
  const handleCurrentPiece = (
    xposition,
    yposition,
    game,
    setGame,
    gameState,
    setGameState, // Updated from setgameState to setGameState for consistency
    enable
  ) => {
    return () => {
      // Removed (e) => to simplify and correct usage
      if (enable) {
        let currentPiece = gameState.currentPiece; // Added to access gameState
        let currentPlayer = gameState.currentPlayer; // Added to access gameState
        let piecePosition = gameState.piecePosition; // Added to access gameState

        if (currentPiece && currentPiece !== "A") {
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
            setGameState({
              // Updated to use setGameState
              ...gameState, // Spread operator to keep other state properties
              currentPiece: null,
              currentPlayer: currentPlayer === "White" ? "Black" : "White",
            });
          }
        } else {
          let selectedPiece = game[xposition][yposition]; // Changed from let s to let selectedPiece
          if (selectedPiece.charAt(0) === currentPlayer.charAt(0)) {
            // Changed from do-while to if to prevent infinite loop
            setGameState({
              // Updated to use setGameState
              ...gameState, // Spread operator to keep other state properties
              currentPiece: selectedPiece, // Changed to selectedPiece for clarity
              piecePosition: [xposition, yposition],
            });
          }
        }
      }
    };
  };

  let numbers = props.xposition + props.yposition;
  const [isHovered, setIsHovered] = useState(false);
  let colors = numbers % 2 === 0 ? "cell green-cell" : "cell white-cell"; // Updated equality operator from == to ===

  if (props.xposition === 0 && props.yposition === 0) {
    // Updated equality operator from == to ===
    colors += " topleftborder";
  } else if (props.xposition === 7 && props.yposition === 0) {
    // Updated equality operator from == to ===
    colors += " bottomleftborder";
  } else if (props.xposition === 7 && props.yposition === 7) {
    // Updated equality operator from == to ===
    colors += " bottomrightborder";
  } else if (props.xposition === 0 && props.yposition === 7) {
    // Updated equality operator from == to ===
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
        props.xposition,
        props.yposition,
        props.game,
        props.setGame,
        props.gameState,
        props.setGameState,
        props.enable
      )}
    >
      <div className="Numbers"> {props.xposition + "." + props.yposition} </div>
      <img src={props.Character ? props.Character : null} />
    </div>
  );
}

export default Piece;

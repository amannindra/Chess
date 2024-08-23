"use strict";
import React, { useState } from "react";
import canMovePiece from "./canMovePiece";

function Piece(props) {
  const handleCurrentPiece = (
    xposition,
    yposition,
    game,
    setGame,
    gameState,
    setGameState,
    enable
  ) => {
    return () => {
      if (enable) {
        let currentPiece = gameState.currentPiece;
        let currentPlayer = gameState.currentPlayer;
        let piecePosition = gameState.piecePosition;
        let kingPosition = gameState.kingPosition; // Get current king position

        const selectedPiece = game[xposition][yposition];

        // If no piece is selected yet or the player selects a new piece of their own
        if (
          !currentPiece ||
          selectedPiece.charAt(0) === currentPlayer.charAt(0)
        ) {
          setGameState({
            ...gameState,
            currentPiece: selectedPiece,
            piecePosition: [xposition, yposition],
          });
        } else if (
          currentPiece &&
          canMovePiece(xposition, yposition, game, gameState)
        ) {
          // If a piece is already selected and the move is valid
          const gameCopy = [...game];
          gameCopy[xposition][yposition] = currentPiece;
          gameCopy[piecePosition[0]][piecePosition[1]] = "None";

          // Update king position if the king moved
          if (currentPiece === "WKing" || currentPiece === "BKing") {
            kingPosition = [xposition, yposition];
          }

          setGame(gameCopy);
          setGameState({
            ...gameState,
            currentPiece: null,
            currentPlayer: currentPlayer === "White" ? "Black" : "White",
            kingPosition, // Update the king's position in gameState
          });
        }
      }
    };
  };

  const [isHovered, setIsHovered] = useState(false);
  const numbers = props.xposition + props.yposition;
  let colors = numbers % 2 === 0 ? "cell green-cell" : "cell white-cell";

  // Adding border based on positions
  if (props.xposition === 0 && props.yposition === 0) {
    colors += " topleftborder";
  } else if (props.xposition === 7 && props.yposition === 0) {
    colors += " bottomleftborder";
  } else if (props.xposition === 7 && props.yposition === 7) {
    colors += " bottomrightborder";
  } else if (props.xposition === 0 && props.yposition === 7) {
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
      <img src={props.Character ? props.Character : null} alt="" />
    </div>
  );
}

export default Piece;

"use strict";
import React from "react";
import { useState } from "react";

function Piece(props) {
  const handleCurrentPiece = (
    xposition,
    yposition,
    game,
    setGame,
    gameState,
    setgameState,
    enable
  ) => {
    return (e) => {
      if (enable) {
      }

      //   if (enable) {
      //     let checkColor = currentPiece.charAt(0);
      //     console.log(`checkColor: ${checkColor}`);
      //     console.log(`currentPlayer: ${currentPlayer}`);
      //     console.log(
      //       `game[xposition][yposition]: ${game[xposition][yposition]}`
      //     );
      //     if (currentPiece && currentPiece !== "A") {
      //       if (
      //         canMovePiece(
      //           currentPiece,
      //           piecePosition,
      //           xposition,
      //           yposition,
      //           game,
      //           currentPlayer
      //         )
      //       ) {
      //         // Move piece logic
      //         console.log("WE SWITCHING!!!");
      //         const gameCopy = [...game];
      //         gameCopy[xposition][yposition] = currentPiece;
      //         gameCopy[piecePosition[0]][piecePosition[1]] = "None";
      //         setGame(gameCopy);
      //         setcurrentPiece(null);
      //         setcurrentPlayer(currentPlayer === "White" ? "Black" : "White");
      //       }
      //     } else {
      //       do {
      //         let s = game[xposition][yposition];
      //         setcurrentPiece(s);
      //         setpiecePosition([xposition, yposition]);
      //         checkColor = s.charAt(0);
      //       } while (checkColor !== currentPlayer);
      //     }
      //   }
      // };
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
        props.xposition,
        props.yposition,
        props.game,
        props.setGame,
        props.gameState,
        props.setgameState,
        props.enable
      )}
    >
      <div className="Numbers"> {props.xposition + "." + props.yposition} </div>
      <img src={props.Character ? props.Character : null} />
    </div>
  );
}

export default Piece;

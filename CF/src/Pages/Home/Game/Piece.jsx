"use strict";
import React from "react";
import { useState } from "react";

function Piece(props) {
  const Possibility = (
    game2,
    piecePosition,
    xposition,
    yposition,
    currentPiece
  ) => {
    switch (currentPiece) {
      case "bRook":
        console.log("Possibility: bRook");

        return true;
      case "bKnight":
        console.log("Possibility: bKnight");
        return;
      case "bBishop":
        console.log("Possibility: bBishop");
        return;
      case "bQueen":
        console.log("Possibility: bQueen");
        return;
      case "bKing":
        console.log("Possibility: bKing");
        return;
      case "bPawn":
        console.log("Possibility: bPawn");
        return;
      case "wRook":
        console.log("Possibility: wRook");
        return;
      case "wKnight":
        console.log("Possibility: wKnight");
        return;
      case "wBishop":
        console.log("Possibility: wBishop");
        return;
      case "wQueen":
        console.log("Possibility: wQueen");
        return;
      case "wKing":
        console.log("Possibility: wKing");
        return;
      case "wPawn":
        console.log("Possibility: wPawn");

        console.log("xposition: " + xposition);
        console.log("piecePosition[0]: " + piecePosition[0]);
        console.log("piecePosition[1]: " + piecePosition[1]);
        if (piecePosition[0] == 6) {
          if (
            xposition == piecePosition[0] - 1 ||
            xposition == piecePosition[0] - 2
          ) {
            if (yposition == piecePosition[1]) {
              if (game2[xposition][yposition] === "") {
                return true;
              }
            }

            console.log("dosen't go with if conditions");
          }
        } else {
          if (xposition == piecePosition[0] - 1) {
            if (yposition == piecePosition[1]) {
              if (game2[xposition][yposition] === "None") {
                return true;
              }
            }
          }
          console.log("dosen't go with else conditions");
        }
        console.log("--------------------------------------------------------");
        return false;

      // if (piecePosition[0] == 6) {
      //   if (
      //     xposition == piecePosition[0] + 1 ||
      //     xposition == piecePosition[0] + 1
      //   ) {
      //     alert("first Pass");
      //     if (yposition == piecePosition[1]) {
      //       alert("Second Pass");
      //       console.log(
      //         "game2[xposition][yposition]: " + game2[xposition][yposition]
      //       );
      //       if (game2[xposition][yposition] == "") {
      //         alert("third Pass");
      //         return true;
      //       }
      //     }
      //   } else if (xposition == piecePosition[0] + 1) {
      //     alert("6: first pass");
      //     if (yposition == piecePosition[1]) {
      //       alert("6: Second Pass");
      //       console.log(
      //         "game2[xposition][yposition]: " + game2[xposition][yposition]
      //       );
      //       if (game2[xposition][yposition] == "") {
      //         alert("6: third Pass");
      //         return true;
      //       }
      //     }
      //   }
      // }

      default:
        return false;
    }
  };

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
      console.log(typeof setGame());
      console.log("Piece return check 1");
      if (game[xposition][yposition]) {
        // Checks if player is clicking on a piece
        // alert("In then statement");

        console.log(`Setting current Piece: ${game[xposition][yposition]}`);
        console.log(`Setting piece Position: ${[xposition, yposition]}`);
        setcurrentPiece(game[xposition][yposition]);
        setpiecePosition([xposition, yposition]);
        alert();
      }
      // } else {
      //   console.log(`currentPlayer: ${currentPlayer}`);
      //   console.log(`character: ${currentPiece[0]}`);
      //   if (currentPlayer == "White" && currentPiece[0] == "w") {
      //     //checks if a player is a piece
      //     // alert("In If statement");
      //     console.log(`White If statement`);
      //     const game2 = game;
      //     const possibilities = Possibility(
      //       game2,
      //       piecePosition,
      //       xposition,
      //       yposition,
      //       currentPiece
      //     );
      //     console.log(possibilities);
      //     if (possibilities) {
      //       console.log(possibilities);
      //       game2[xposition][yposition] = currentPiece; //places the piece in the position the player wants it to be
      //       game2[piecePosition[0]][piecePosition[1]] = "None"; //removes the orginal position of the piece
      //       setcurrentPiece("");
      //       setGame(game2);
      //       setcurrentPlayer("Black");
      //       console.log("White Here");
      //     }
      //   } else if (currentPlayer == "Black" && currentPiece[0] == "b") {
      //     const game2 = game;
      //     game2[xposition][yposition] = currentPiece;
      //     game2[piecePosition[0]][piecePosition[1]] = "";
      //     setcurrentPiece("");
      //     setGame(game2);
      //     setcurrentPlayer("White");
      //     console.log("Black Here");
      //   }
      // }
    };
  };

  let numbers = props.xposition + props.yposition; // + 2
  // console.log(typeof props.setGame);
  return (
    <div
      className={numbers % 2 == 0 ? "cell green-cell" : "cell white-cell"}
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
      <div className="Numbers">{props.xposition + "." + props.yposition}</div>
      <img src={props.Character ? props.Character : null} />
    </div>
  );
}

export default Piece;

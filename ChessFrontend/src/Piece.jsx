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
            xposition == piecePosition[0] + 1 ||
            xposition == piecePosition[0] + 1
          ) {
            alert("first Pass");
            if (yposition == piecePosition[1]) {
              alert("Second Pass");
              console.log(
                "game2[xposition][yposition]: " + game2[xposition][yposition]
              );
              if (game2[xposition][yposition] == "") {
                alert("third Pass");
                return true;
              }
            }
          } else if (xposition == piecePosition[0] + 1) {
            alert("6: first pass");
            if (yposition == piecePosition[1]) {
              alert("6: Second Pass");
              console.log(
                "game2[xposition][yposition]: " + game2[xposition][yposition]
              );
              if (game2[xposition][yposition] == "") {
                alert("6: third Pass");
                return true;
              }
            }
          }
        }
        return false;

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
      // console.log(" currentpiece: " + currentPiece);
      // console.log(
      //   "piecePosition[0]: " +
      //     piecePosition[0] +
      //     " , + piecePosition[1]: " +
      //     piecePosition[1]
      // );
      if (game[xposition][yposition]) {
        // Checks if player is clicking on a piece
        setcurrentPiece(game[xposition][yposition]);
        setpiecePosition([8 - xposition, yposition]);
      } else {
        if (currentPlayer == "White" && currentPiece[0] == "w") {
          //checks if a player is a piece
          const game2 = game;
          const possibilities = Possibility(
            game2,
            piecePosition,
            xposition,
            yposition,
            currentPiece
          );
          console.log(possibilities);
          if (possibilities) {
            console.log(possibilities);
            game2[xposition][yposition] = currentPiece; //places the piece in the position the player wants it to be
            game2[piecePosition[0]][piecePosition[1]] = ""; //removes the orginal position of the piece
            setcurrentPiece("");
            setGame(game2);
            setcurrentPlayer("Black");
            console.log("White Here");
          }
        } else if (currentPlayer == "Black" && currentPiece[0] == "b") {
          const game2 = game;
          game2[xposition][yposition] = currentPiece;
          game2[piecePosition[0]][piecePosition[1]] = "";
          setcurrentPiece("");
          setGame(game2);
          setcurrentPlayer("White");
          console.log("Black Here");
        }

        // const previousPosition = piecePosition;
        // if (xposition + yposition % 2 == 0){
        //   const prev = document.getElementById(previousPosition);
        //   prev.style.backgroundColor == null;
        // }
        // const current = document.getElementById(xposition + "." + yposition);
        // // for (let i = 0; i < 8; i++) {
        // //   for (let j = 0; j < 8; j++) {
        // //     const cell = document.getElementById(xposition + "." + yposition);
        // //     const num = xposition + yposition;
        // //     if (num % 2 == 0) {
        // //       cell.className = "cell green-cell";
        // //     } else {
        // //       cell.className = "cell white-cell";
        // //     }
        // //   }
        // // }

        // console.log(game[xposition][yposition]);
        // if (game[xposition][yposition]) {
        //   setcurrentPiece(game[xposition][yposition]);
        //   // setpiecePosition(xposition + "." + yposition);
        //   current.style.backgroundColor = "#c7c704";
      }
    };
  };

  let numbers = props.xposition + props.yposition; // + 2

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

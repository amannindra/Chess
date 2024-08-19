"use strict";
function canMovePiece(xposition, yposition, game, gameState) {
  
  if (!gameState || !gameState.currentPiece) return false; // Added safeguard

  const { currentPiece, currentPlayer, piecePosition } = gameState;

  // Extract the piece color ('w' for white, 'b' for black)
  const pieceColor = currentPiece[0];
  console.log("before if");
  console.log("pieceColor: " + pieceColor);
  console.log("currentPlayer: " + currentPlayer);
  // Check if it's the correct player's turn
  if (
    (pieceColor === "W" && currentPlayer !== "White") ||
    (pieceColor === "B" && currentPlayer !== "Black")
  ) {
    return false; // Not this player's turn
  }
  console.log("before switch piece: " + currentPiece);
  // Define movement rules for each piece type
  switch (currentPiece) {
    case "WRook":
      console.log("wRook case");
      return canMoveRook(piecePosition, xposition, yposition, game);
    case "WKnight":
      console.log("wKnight case");
      return canMoveKnight(piecePosition, xposition, yposition);
    case "WBishop":
      console.log("wBishop case");
      return canMoveBishop(piecePosition, xposition, yposition, game);
    case "WQueen":
      console.log("wQueen case");
      return canMoveQueen(piecePosition, xposition, yposition, game);
    case "WKing":
      console.log("wKing case");
      return canMoveKing(piecePosition, xposition, yposition, game);
    case "BPawn":
      console.log("bPawn case");
      return canMovePawn(piecePosition, xposition, yposition, game, "B");
    case "WPawn":
      console.log("wPawn case");
      console.log("sdsda");
      return canMovePawn(piecePosition, xposition, yposition, game, "W");
    default:
      console.log("false definition");
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
  const direction = color === "W" ? -1 : 1; // White pawns move up, black pawns move down
  const startRow = color === "W" ? 6 : 1;

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
  console.log("no conditions found");
  return false;
}

export default canMovePiece;

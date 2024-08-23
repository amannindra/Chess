"use strict";
function canMovePiece(xposition, yposition, game, gameState) {
  if (!gameState || !gameState.currentPiece) return false;

  const { currentPiece, currentPlayer, piecePosition, kingPosition } =
    gameState;
  const pieceColor = currentPiece[0];
  const opponentColor = currentPlayer === "White" ? "B" : "W";

  // Get the current king's position
  let currentKingPosition = kingPosition[currentPlayer];

  if (
    (pieceColor === "W" && currentPlayer !== "White") ||
    (pieceColor === "B" && currentPlayer !== "Black")
  ) {
    return false; // Not this player's turn
  }

  let validMove = false;

  switch (currentPiece) {
    // White Pieces
    case "WRook":
      validMove = canMoveRook(piecePosition, xposition, yposition, game);
      break;
    case "WKnight":
      validMove = canMoveKnight(piecePosition, xposition, yposition);
      break;
    case "WBishop":
      validMove = canMoveBishop(piecePosition, xposition, yposition, game);
      break;
    case "WQueen":
      validMove = canMoveQueen(piecePosition, xposition, yposition, game);
      break;
    case "WKing":
      validMove = canMoveKing(piecePosition, xposition, yposition, game);
      // Update king position after a valid move
      if (validMove) {
        currentKingPosition = [xposition, yposition];
      }
      break;
    case "WPawn":
      validMove = canMovePawn(piecePosition, xposition, yposition, game, "W");
      break;

    // Black Pieces
    case "BRook":
      validMove = canMoveRook(piecePosition, xposition, yposition, game);
      break;
    case "BKnight":
      validMove = canMoveKnight(piecePosition, xposition, yposition);
      break;
    case "BBishop":
      validMove = canMoveBishop(piecePosition, xposition, yposition, game);
      break;
    case "BQueen":
      validMove = canMoveQueen(piecePosition, xposition, yposition, game);
      break;
    case "BKing":
      validMove = canMoveKing(piecePosition, xposition, yposition, game);
      // Update king position after a valid move
      if (validMove) {
        currentKingPosition = [xposition, yposition];
      }
      break;
    case "BPawn":
      validMove = canMovePawn(piecePosition, xposition, yposition, game, "B");
      break;

    default:
      validMove = false;
  }

  if (validMove) {
    // Simulate the move
    const simulatedGame = JSON.parse(JSON.stringify(game)); // Deep clone the game state
    simulatedGame[piecePosition[0]][piecePosition[1]] = "None";
    simulatedGame[xposition][yposition] = currentPiece;

    if (isKingInCheck(currentKingPosition, simulatedGame, opponentColor)) {
      return false; // Move leaves king in check
    }
  }

  return validMove;
}
function isKingInCheck(kingPosition, game, opponentColor) {
  const [kingX, kingY] = kingPosition;

  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      const piece = game[i][j];

      if (piece.startsWith(opponentColor)) {
        const pieceType = piece.substring(1); // Remove color prefix
        switch (pieceType) {
          case "Rook":
            if (canMoveRook([i, j], kingX, kingY, game)) return true;
            break;
          case "Knight":
            if (canMoveKnight([i, j], kingX, kingY)) return true;
            break;
          case "Bishop":
            if (canMoveBishop([i, j], kingX, kingY, game)) return true;
            break;
          case "Queen":
            if (canMoveQueen([i, j], kingX, kingY, game)) return true;
            break;
          case "King":
            if (canMoveKing([i, j], kingX, kingY, game)) return true;
            break;
          case "Pawn":
            if (canMovePawn([i, j], kingX, kingY, game, opponentColor))
              return true;
            break;
        }
      }
    }
  }

  return false;
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

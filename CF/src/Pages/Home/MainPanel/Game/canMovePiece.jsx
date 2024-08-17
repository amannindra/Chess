function canMovePiece(props) {
  let currentPiece = props.gameState.currentPiece;
  let currentPlayer = props.gameState.currentPlayer;
  let piecePosition = props.gameState.piecePosition;
  let game = props.game;
  if (!currentPiece) return false; // No piece selected

  // Extract the piece color ('w' for white, 'b' for black)
  const pieceColor = currentPiece[0];

  // Check if it's the correct player's turn
  if (
    (pieceColor === "W" && currentPlayer !== "White") ||
    (pieceColor === "B" && currentPlayer !== "Black")
  ) {
    return false; // Not this player's turn
  }

  // Define movement rules for each piece type
  switch (currentPiece) {
    case "wRook":
      return canMoveRook(piecePosition, props.xposition, props.yposition, game);
    case "wKnight":
      return canMoveKnight(piecePosition, props.xposition, props.yposition);
    case "wBishop":
      return canMoveBishop(
        piecePosition,
        props.xposition,
        props.yposition,
        game
      );
    case "wQueen":
      return canMoveQueen(
        piecePosition,
        props.xposition,
        props.yposition,
        game
      );
    case "wKing":
      return canMoveKing(piecePosition, props.xposition, props.yposition, game);
    case "bPawn":
      return canMovePawn(
        piecePosition,
        props.xposition,
        props.yposition,
        game,
        "B"
      );
    case "wPawn":
      return canMovePawn(
        piecePosition,
        props.xposition,
        props.yposition,
        game,
        "W"
      );
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

  return false;
}

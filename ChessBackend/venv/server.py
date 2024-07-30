from flask import Flask, jsonify, request
from flask_cors import CORS


class Chess:
    def __init__(self):
        self.game = [
            ["bRook", "bKnight", "bBishop", "bQueen",
                "bKing", "bBishop", "bKnight", "bRook"],
            ["bPawn", "bPawn", "bPawn", "bPawn",
                "bPawn", "bPawn", "bPawn", "bPawn"],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["wPawn", "wPawn", "wPawn", "wPawn",
                "wPawn", "wPawn", "wPawn", "wPawn"],
            ["wRook", "wKnight", "wBishop", "wQueen",
                "wKing", "wBishop", "wKnight", "wRook"]
        ]
        self.currentPiece = ""
        self.previousPosition = [None, None]
        self.currentPlayer = "White"
        self.checkMate = False

    def chessData(self):
        return {
            "game": self.game,
            "currentPlayer": self.currentPlayer,
            "checkMate": self.checkMate,
            "previousPosition": self.previousPosition,
            "currentPiece": self.currentPiece
        }


app = Flask(__name__)
CORS(app)
chess_game = Chess()


@app.route("/chessData", methods=["GET"])
def get_chess_data():
    return jsonify(chess_game.chessData())


@app.route("/uploadData", methods=["POST"])
def upload_data():
    if request.is_json:
        data = request.get_json()
        print(data)
        return jsonify({"message": "Data received"}), 200
    else:
        return jsonify({"error": "Unsupported Media Type"}), 415


if __name__ == '__main__':
    app.run(debug=True)

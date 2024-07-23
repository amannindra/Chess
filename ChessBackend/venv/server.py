from flask import Flask, Response, jsonify, request


class Chess:
    def __init__(self):
        self.game = ["bRook", "bKnight", "bBishop", "bQueen", "bKing", "bBishop", "bKnight", "bRook"], ["bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn", "bPawn"], ["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], [
            "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn", "wPawn"], ["wRook", "wKnight", "wBishop", "wQueen", "wKing", "wBishop", "wKnight", "wRook",]
        self.currentPiece = ""
        self.previousPosition = ""
        self.playersturn = "White"
        self.checkMate = False
        self.chessData()
       # self.printboard()

    def printboard(self):
        while not self.checkMate:
            for i in range(len(self.game)):
                print(self.game[i])

    def server(self, app):

        @app.route("/chessData")
        def get_chess_data():
            return self.chessData()

        if __name__ == '__main__':
            app.run(debug=True)

    def serversend(self, app):
        @app.route("/uploadData", methods=["POST"])
        def sendChessData():
            data = request.get_json()
            print(data)
        if __name__ == '__main__':
            app.run(debug=True)

    def chessData(self):
        print("In here")
        return {"game": self.game, "playersturn": self.playersturn, "checkMate": self.checkMate, "previousPosition": self.previousPosition, "currentPiece": self.currentPiece}


chess_game = Chess()

# Run the server
app = Flask(__name__)
chess_game.server(app)

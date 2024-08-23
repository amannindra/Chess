import "./BotPanel.css";
import { useState } from "react";
import Devon from "./images/devon.png";
import Jimmy from "./images/jimmy.png";
import Natasha from "./images/natasha.png";
import Nisha from "./images/nisha.png";
import Tomas from "./images/tomas.png";

function BotPanel(props) {
  const [botData, setbotData] = useState({
    Jimmy: 600,
    Nisha: 900,
    Tomas: 1200,
    Devon: 1600,
    Natasha: 2000,
  });
  const [bot, setbot] = useState("Jimmy");

  const getImage = (bot) => {
    switch (bot) {
      case "Jimmy":
        return (
          <>
            <img src={Jimmy} />
            <h2>
              {bot.toString()} ({botData.Jimmy})
            </h2>
            <p>
              Jimmy wants to make sure you enjoy the game. He'll adapt to make
              it a little easier, or a little harder, depending on how you play.
            </p>
          </>
        );
      case "Nisha":
        return (
          <>
            <img src={Nisha} />
            <h2>
              {bot.toString()} ({botData.Nisha})
            </h2>
            <p>
              Nisha is a friendly person who plays a little defensively and
              enjoys playing with people at all levels.
            </p>
          </>
        );
      case "Tomas":
        return (
          <>
            <img src={Tomas} />
            <h2>
              {bot.toString()} ({botData.Tomas})
            </h2>
            <p>
              Tomas will give almost anyone a good game, and a tough positional
              battle!
            </p>
          </>
        );
      case "Devon":
        return (
          <>
            <img src={Devon} />
            <h2>
              {bot.toString()} ({botData.Devon})
            </h2>
            <p>
              Devon loves to play aggressively... but if he gets the upper-hand,
              he'll go easy on you.
            </p>
          </>
        );
      case "Natasha":
        return (
          <>
            <img src={Natasha} />
            <h2>
              {bot.toString()} ({botData.Natasha})
            </h2>
            <p>
              Natasha always wants to win! But she's not totally heartless -
              she'll ease up sometimes too.
            </p>
          </>
        );
    }
  };

  const changeBot = (bot) => {
    setbot(bot);
  };

  return (
    <>
      <div className="container">
        <h1> Play vs...</h1>
        {getImage(bot)}
        <h2>Coaches</h2>
        <div className="coach">
          <img src={Jimmy} onClick={() => changeBot("Jimmy")} />
          <img src={Nisha} onClick={() => changeBot("Nisha")} />
          <img src={Tomas} onClick={() => changeBot("Tomas")} />
          <img src={Devon} onClick={() => changeBot("Devon")} />
          <img src={Natasha} onClick={() => changeBot("Natasha")} />
        </div>
        <button onClick={() => props.setenable(true)}>Play</button>
      </div>
    </>
  );
}

export default BotPanel;

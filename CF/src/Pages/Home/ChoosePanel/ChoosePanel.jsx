import "./ChoosePanel.css";
import Blitz from "./images/blitz.svg";
import Computer from "./images/computer.svg";
import Friend from "./images/friend.svg";
import Hand from "./images/playwhite.cea685ba.svg";
function ChoosePanel() {
  return (
    <div className="Choose">
      <div className="lim">
        <h1>Play Chess</h1>
        <div className="handimage">
          <img src={Hand} />
        </div>
        <div className="cube">
          <img src={Blitz} />
          <div className="boxtext">
            <span className="title">Play Online</span>
            <span className="below-text">
              Play vs a person with similar skill
            </span>
          </div>
        </div>
        <div className="cube">
          <img src={Computer} />
          <div className="boxtext">
            <span className="title">Computer</span>
            <span className="below-text">
              Challenge a bot from Easy to Master
            </span>
          </div>
        </div>
        <div className="cube">
          <img src={Friend} />
          <div className="boxtext">
            <span className="title">Play a Friend</span>
            <span className="below-text">
              Invite a friend to a game of Chess
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosePanel;

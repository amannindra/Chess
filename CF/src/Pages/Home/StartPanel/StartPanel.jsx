import "./StartPanel.css";
import { useState } from "react";
function StartPanel() {
  const [time, settime] = useState(1);
  const [addingTime, setaddingTime] = useState(false);
  const addTime = () => {
    return (
      <div className="option">
        <div className="minibox" onClick={() => settime(1)}>
          1 min
        </div>
        <div className="minibox" onClick={() => settime(3)}>
          3 min
        </div>
        <div className="minibox" onClick={() => settime(5)}>
          5 min
        </div>
      </div>
    );
  };
  return (
    <div className="Start">
      <div className="limit">
        <button
          type="button"
          id="time"
          onClick={() => setaddingTime(!addingTime)}
        >
          {time} min
        </button>
        {addingTime ? addTime() : null}
        <button type="button" id="Play">
          Play
        </button>
        <button type="button" id="friend">
          Play a friend
        </button>
      </div>
      <div className="Stats">
        <div className="statsText">2 players Online</div>
        <div className="statsText">Some text</div>
      </div>
    </div>
  );
}
export default StartPanel;

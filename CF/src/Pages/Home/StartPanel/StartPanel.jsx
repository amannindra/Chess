import "./StartPanel.css";
function StartPanel() {
  return (
    <div className="Start">
      <div className="limit">
        <button type="button" id="time">
          1 minute
        </button>
        <button type="button" id="Play">
          Play
        </button>
        <button type="button" id="friend">
          Play a friend
        </button>
      </div>
    </div>
  );
}
export default StartPanel;

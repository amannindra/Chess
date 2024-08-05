import "./LeftPanel.css";
import React from "react";
function LeftPanel() {
  return (
    <>
      <div className="LeftPanel">
        <div className="TopPanel">
          <div id="title">Chess</div>
          <div className="block">Play</div>
          <div className="block">Puzzeles</div>
          <div className="block">Learn</div>
          <div className="block">Watch</div>
          <div className="block">News</div>
          <div className="block">Social</div>
          <div className="block">More</div>
          <div className="block">Free Trail</div>
          <input type="text" id="search" placeholder="Search" />
        </div>
        <div className="bottomPanel">
          <div className="miniblocked">Light UI</div>
          <div className="miniblocked">Collapse</div>
          <div className="miniblocked">Settings</div>
          <div className="miniblocked">Help</div>
        </div>
      </div>
    </>
  );
}

export default LeftPanel;

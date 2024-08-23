import "./LeftPanel.css";
import React from "react";
import { useNavigate } from "react-router-dom";
function LeftPanel() {
  const navigate = useNavigate();
  return (
    <>
      <div className="LeftPanel">
        <div className="TopPanel">
          <div id="title" onClick={() => navigate("/")}>
            Chess
          </div>
          <div className="block" onClick={() => navigate("/nopage")}>
            Play
          </div>
          <div className="block" onClick={() => navigate("/nopage")}>
            Puzzeles
          </div>
          <div className="block" onClick={() => navigate("/nopage")}>
            Learn
          </div>
          <div className="block" onClick={() => navigate("/nopage")}>
            Watch
          </div>
          <div className="block" onClick={() => navigate("/nopage")}>
            News
          </div>
          <div className="block" onClick={() => navigate("/nopage")}>
            Social
          </div>
          <div className="block" onClick={() => navigate("/nopage")}>
            More
          </div>
          <div className="block" onClick={() => navigate("/nopage")}>
            Free Trail
          </div>
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

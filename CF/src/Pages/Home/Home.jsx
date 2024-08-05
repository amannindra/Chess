import "./Home.css";
import LeftPanel from "./LeftPanel/LeftPanel";
import MainPanel from "./MainPanel/MainPanel";
import React from "react";
function Home() {
  return (
    <>
      <div className="layout">
        <LeftPanel />
        <MainPanel />
      </div>
    </>
  );
}

export default Home;

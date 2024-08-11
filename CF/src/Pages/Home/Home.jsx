import "./Home.css";
import LeftPanel from "./LeftPanel/LeftPanel";
import MainPanel from "./MainPanel/MainPanel";
import StartPanel from "./StartPanel/StartPanel";
import ChoosePanel from "./ChoosePanel/ChoosePanel";
import { useState } from "react";
function Home() {
  const [panel, setPanel] = useState("choose");
  return (
    <>
      <div className="layout">
        <LeftPanel />

        <MainPanel />
        <ChoosePanel />

        {/* {panel == "choose" ? <ChoosePanel /> : <StartPanel />} */}
      </div>
    </>
  );
}

export default Home;

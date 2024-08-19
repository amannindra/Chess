import "./Home.css";
import LeftPanel from "./LeftPanel/LeftPanel";
import MainPanel from "./MainPanel/MainPanel";
import StartPanel from "./StartPanel/StartPanel";
import ChoosePanel from "./ChoosePanel/ChoosePanel";
import BotPanel from "./BotPanel/BotPanel";
import { useState } from "react";
function Home(props) {
  const [enable, setenable] = useState(false);
  return (
    <>
      <div className="layout">
        <LeftPanel />
        <div className="down">
          <MainPanel enable={enable} setenable={setenable} />
        </div>
        <div className="panelbackend">
          {props.page === "choose" && <ChoosePanel />}
          {props.page === "online" && <StartPanel />}
          {props.page === "computer" && <BotPanel />}
        </div>
      </div>
    </>
  );
}

export default Home;

import "./Home.css";
import LeftPanel from "./LeftPanel/LeftPanel";
import MainPanel from "./MainPanel/MainPanel";
import StartPanel from "./StartPanel/StartPanel";
import ChoosePanel from "./ChoosePanel/ChoosePanel";
import { useState } from "react";
function Home(props) {
  const [enable, setenable] = useState(false);
  return (
    <>
      <div className="layout">
        <LeftPanel />
        <div className="down">
          <MainPanel enable={enable} setenable={setenable} />
          <ChoosePanel />
        </div>

        {/* {props.page === "choose" && <ChoosePanel />}
        {props.page === "online" && <OnlinePanel />}
        {props.page === "2player" && <TwoPlayerPanel />}
        {props.page === "computer" && <ComputerPanel />} */}
      </div>
    </>
  );
}

export default Home;

import "./NoPage.css";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <div className="no">
        <Link to="./">
          <h1>Incorrect Page</h1>
        </Link>
      </div>
    </>
  );
}

export default NoPage;

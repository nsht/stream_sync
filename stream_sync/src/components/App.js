import React from "react";
import "../css/App.css";

function App() {
  return (
    <>
      <hr className="header"></hr>

      <div className="row">
        <a className="column host" href="/host">
          Host
        </a>
        <a className="column join" href="/join">
          Join
        </a>
      </div>
    </>
  );
}

export default App;

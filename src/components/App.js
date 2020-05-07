import React from "react";
import "../css/App.css";
import Navbar from "./Navbar";
function App() {
  return (
    <>
    <Navbar></Navbar>

      <div className="row">
        <a className="select_column host" href="/host">
          Host
        </a>
        <a className="select_column join" href="/join">
          Join
        </a>
      </div>
    </>
  );
}

export default App;

import React from "react";
import "../css/App.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item" href="https://bulma.io">
            <img
              src={process.env.PUBLIC_URL + "/Stream_Sync.svg"}
              width="112"
              height="28"
              alt="Logo"
            ></img>
            Youtube Party
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-primary">
                <strong>Buy me a coffee</strong>
              </div>
              <a href="/host" target="_blank" className="button is-light">
                Host
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

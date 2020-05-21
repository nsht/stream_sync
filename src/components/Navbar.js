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
          <div className="navbar-item">
            <a href={window.location.origin}>
              <img
                src={process.env.PUBLIC_URL + "/Stream_Sync.svg"}
                width="112"
                height="28"
                alt="Logo"
              ></img>
            </a>
            <a href={window.location.origin}>YouTube Fiesta</a>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="https://www.paypal.me/jeff007ali" target="_blank">Buy me a coffee</a>
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

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
              <a href="https://www.buymeacoffee.com/nishit"className="bmac_link" target="_blank">
                <img
                  src="https://cdn.buymeacoffee.com/buttons/lato-red.png"
                  alt="Buy Me A Coffee"
                  className="bmac"
                ></img>
              </a>
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

import React from "react";
import Navbar from "./Navbar";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <section className="hero is-link is-primary has-background-primary is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="tile is-ancestor">
              <div className="tile is-6">
                <div className="container homepage_left_hero">
                  <h1 className="title has-text-centered">
                    Watch YouTube Together with friends!
                  </h1>
                </div>
              </div>
              <div className="tile is-6">
                <video
                  src={process.env.PUBLIC_URL + "/intro_video.webm"}
                ></video>
              </div>
            </div>
          </div>
        </section>
        <div className="row">
          <a className="select_column host" href="/host">
            Host
          </a>
          <a className="select_column join" href="/join">
            Join
          </a>
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Stream Sync</strong> by{" "}
              <a href="https://jgthms.com">Stream Sync Inc.</a>
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default HomePage;

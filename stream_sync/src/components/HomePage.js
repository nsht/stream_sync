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
                  className="hero_video"
                  autoplay="true"
                  loop="true"
                  src={process.env.PUBLIC_URL + "/intro_video.webm"}
                ></video>
              </div>
            </div>
          </div>
        </section>
        {/* TODO refactor for responsiveness with section and hero tags */}
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="tile is-ancestor full_height">
              <div className="tile is-6">
                <div className="container homepage_left_hero">
                  <div className="homepage_explainer">
                    <img
                      className="laptop_svg"
                      src={process.env.PUBLIC_URL + "/laptop.svg"}
                    ></img>
                    <img
                      className="sync_svg"
                      src={process.env.PUBLIC_URL + "/sync.svg"}
                    ></img>
                    <img
                      className="laptop_svg"
                      src={process.env.PUBLIC_URL + "/laptop.svg"}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="tile is-6">
                <div className="homepage_explainer">
                  <ol>
                    <li>Host a party using a YouTube link</li>
                    <li>Share links with friends</li>
                    <li>Watch in sync! Chat with friends!</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="test_row">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
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

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
                  autoPlay="true"
                  loop="true"
                  src={process.env.PUBLIC_URL + "/intro_video.webm"}
                ></video>
              </div>
            </div>
          </div>
        </section>
        {/* TODO refactor for responsiveness with section and hero tags */}
        <div className="test_row">
          <div className="content_party">
            <img
              className="floating"
              src={process.env.PUBLIC_URL + "/party_color.svg"}
            ></img>
            <h4>Create a Party</h4>
          </div>
          <div className="content_copy">
            <img
              className="floating"
              src={process.env.PUBLIC_URL + "/copy_color.svg"}
            ></img>
            <h4>Share the link with friends</h4>
          </div>
          <div className="content_sync">
            <div>
              <img
                className="laptop_svg"
                src={process.env.PUBLIC_URL + "/laptop_color.svg"}
              ></img>
              <img
                className="sync_svg"
                src={process.env.PUBLIC_URL + "/sync_color.svg"}
              ></img>
              <img
                className="laptop_svg"
                src={process.env.PUBLIC_URL + "/laptop_color.svg"}
              ></img>
            </div>
            <h4>Play/Pause/Seek the video in Sync</h4>
          </div>
          <div className="content_chat">
            <img
              className="floating"
              src={process.env.PUBLIC_URL + "/chat_color.svg"}
            ></img>
            <h4>Chat!</h4>
          </div>
        </div>
        <div className="row">
          <a className="select_column host" href="/host">
            Host
          </a>
          <a className="select_column join" href="/join">
            Join
          </a>
        </div>
        {/* <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Stream Sync</strong> by{" "}
              <a href="https://jgthms.com">Stream Sync Inc.</a>
            </p>
          </div>
        </footer> */}
      </>
    );
  }
}

export default HomePage;

import React from "react";
import Navbar from "./Navbar";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <section class="hero is-link is-primary is-fullheight-with-navbar">
          <div class="hero-body">
            <div class="tile is-ancestor">
              <div class="tile is-6">
                <div className="container">
                  <h1 class="title">Watch YouTube Together with friends!</h1>
                  <h2 class="subtitle">Watch your favourite videos in sync</h2>
                </div>
              </div>
              <div class="tile is-6">
                <video
                  src={process.env.PUBLIC_URL + "/intro_video.webm"}
                ></video>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;

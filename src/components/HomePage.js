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
                  <h1 className="title has-text-centered not-selectable">
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
          <div className="row">
            <a className="select_column host" href="/host">
              Host
            </a>
            <a className="select_column join" href="/join">
              Join
            </a>
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
            <h4>Play/Pause/Hop the video in Sync</h4>
          </div>
          <div className="content_chat">
            <img
              className="floating"
              src={process.env.PUBLIC_URL + "/chat_color.svg"}
            ></img>
            <h4>Real-time conversation!</h4>
          </div>
        </div>
        <div className="about">
          <figure class="snip red">
            <figcaption>
              <h2>Cristiano <span>Ronaldo</span></h2>
              <p>Some things don't need the thought people give them.</p>
              <div class="icons">
                <a href="#"><i class="ion-social-twitter"></i></a>
                <a href="#"><i class="ion-social-github"></i></a>
                <a href="#"><i class="ion-social-linkedin"></i></a>
              </div>	
            </figcaption>
            <img src="/cr7.jpg" alt="cr7"/>	
            <div class="position">Footballer</div>
          </figure>
          <figure class="snip green">
            <figcaption>
              <h2>Cristiano <span>Ronaldo</span></h2>
              <p>Some things don't need the thought people give them.</p>
              <div class="icons">
                <a href="#"><i class="ion-social-twitter"></i></a>
                <a href="#"><i class="ion-social-github"></i></a>
                <a href="#"><i class="ion-social-linkedin"></i></a>
              </div>	
            </figcaption>
            <img src="/cr7.jpg" alt="sample6"/>	
            <div class="position">Footballer</div>
          </figure>
        </div>
        {/* <footer className="footer">
          <div className="content has-text-centered">
            <p>
              A <strong>Youtube Party</strong> by{" "}
              <a href="">BitBox</a>
            </p>
          </div>
        </footer> */}
      </>
    );
  }
}

export default HomePage;
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
                    Watch YouTube Together with Friends!
                  </h1>
                  <h2 class="subtitle has-text-centered not-selectable">
                    Chat with friends and watch videos in sync<br></br>
                    Your data remains secure on your devices
                  </h2>
                </div>
              </div>
              <div className="tile is-6">
                <video
                  className="hero_video"
                  autoPlay="true"
                  loop="true"
                  muted="true"
                  src={process.env.PUBLIC_URL + "/introductory_video.mp4"}
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
        <div className="grid_row">
          <div className="content_party">
            <img
              alt="party_icon"
              className="floating"
              src={process.env.PUBLIC_URL + "/party_color.svg"}
            ></img>
            <h4>Create a Party</h4>
          </div>
          <div className="content_copy">
            <img
              alt="copy_icon"
              className="floating"
              src={process.env.PUBLIC_URL + "/copy_color.svg"}
            ></img>
            <h4>Share the link with friends</h4>
          </div>
          <div className="content_sync">
            <div>
              <img
                alt="laptop_icon"
                className="laptop_svg"
                src={process.env.PUBLIC_URL + "/laptop_color.svg"}
              ></img>
              <img
                alt="sync_icon"
                className="sync_svg"
                src={process.env.PUBLIC_URL + "/sync_color.svg"}
              ></img>
              <img
                alt="laptop_icon"
                className="laptop_svg"
                src={process.env.PUBLIC_URL + "/laptop_color.svg"}
              ></img>
            </div>
            <h4>Play/Pause/Hop the video in Sync</h4>
          </div>
          <div className="content_chat">
            <img
              alt="chat_icon"
              className="floating"
              src={process.env.PUBLIC_URL + "/chat_color.svg"}
            ></img>
            <h4>Real-time conversation!</h4>
          </div>
        </div>

        <div className="grid_row">
          <div className="about_right">
            <figure className="snip">
              <div className="profile-image">
                <img src="/jeff.jpg" alt="JeffAli" />
                <div className="icons">
                  <a
                    href="https://twitter.com/jeff007ali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ion-social-twitter"></i>
                  </a>
                  <a
                    href="https://github.com/jeff007ali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="ion-social-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jafar-ali-agharia-2645b3104"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="ion-social-linkedin"></i>
                  </a>
                </div>
              </div>
              <figcaption>
                <h3>Jeff Ali</h3>
                <h4>Software Developer</h4>
                <p>"When the world sleeps, we code, we build, we launch."</p>
              </figcaption>
            </figure>
          </div>
          <div className="about_left">
            <figure className="snip">
              <div className="profile-image">
                <img src="/nishit.jpg" alt="Nishit" />
                <div className="icons">
                  <a
                    href="https://twitter.com/Nishitm1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ion-social-twitter"></i>
                  </a>
                  <a
                    href="https://github.com/ryux00"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="ion-social-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nishit-mohanan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <i className="ion-social-linkedin"></i>
                  </a>
                </div>
              </div>
              <figcaption>
                <h3>Nishit Mohanan</h3>
                <h4>Software Developer</h4>
                <p>"Backend Engineer with a dash of frontend"</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <a
          href="https://www.producthunt.com/posts/youtube-fiesta?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-youtube-fiesta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=202836&theme=light"
            alt="Youtube Fiesta - Watch Youtube with friends in sync! | Product Hunt Embed"
            style={{ width: "250px", height: "54px" }}
            width="250px"
            height="54px"
            className="product_hunt_button"
          />
        </a>
        {/* <footer className="footer">
          <div className="content has-text-centered">
            <p>
              A <strong>Youtube Party</strong> by{" "}
              <a href="">BitBox</a>
            </p>
            <p>© 2020 Stream Sync Inc</p>
          </div>
        </footer> */}
      </>
    );
  }
}

export default HomePage;

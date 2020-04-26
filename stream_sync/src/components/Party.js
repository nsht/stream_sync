import React from "react";
import Navbar from "./Navbar";
import Chat from "./Chat";
import Player from "./Player";
import { get_data } from "../utils/data_storage_utils";
import { createConnection, introduce } from "../utils/webRTC_utils";
import { ToastContainer, toast } from "react-toastify";

// css
import "../css/App.css";
import "react-toastify/dist/ReactToastify.min.css";

// https://stackoverflow.com/questions/54017100/how-to-integrate-youtube-iframe-api-in-reactjs-solution
class Party extends React.Component {
  state = {
    user_name: "",
    room_name: "",
    youtube_video_id: "",
    youtube_current_pos: 0,
    peer_id: "",
    is_host: false,
    chat_log: [],
    invite_popup_shown: false,
    connected_users: {}
  };

  constructor(props) {
    super(props);
    window.global_this_obj = this;
    window.peer_ids = [];
    window.connections = [];
  }

  componentDidMount() {
    var peer_id = this.props.match.params.host_id;
    this.setState({ peer_id });
    var data = get_data(this.props.match.params.host_id);

    if (data) {
      this.setState({
        peer_id: this.props.match.params.host_id,
        user_name: data.user_name,
        youtube_video_id: data.youtube_video_id,
        room_name: data.room_name,
        is_host: data.is_host
      });
    } else {
      // Not a host: Create connection
      createConnection(this, false, this.props.match.params.host_id);
    }
  }

  setUserName = e => {
    e.preventDefault();
    this.setState({ user_name: e.target.user_name.value });
    introduce(e.target.user_name.value);
  };

  copyToClipboard = e => {
    e.preventDefault();
    this.copy_invite.select();
    var url = e.target.invite_link.value;
    document.execCommand("copy");
    this.setState({ invite_popup_shown: true });
  };

  closeModal = e => {
    this.setState({ invite_popup_shown: true });
  };

  notify = message => {
    toast.info(message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div
          className={
            "modal   " + (this.state.user_name === "" ? "is-active" : "")
          }
        >
          <div class="modal-background"></div>
          <div class="modal-content">
            <div className="box">
              <form onSubmit={this.setUserName}>
                <div class="field is-grouped">
                  <p class="control is-expanded">
                    <input
                      class="input"
                      type="text"
                      name="user_name"
                      placeholder="Enter Your Username"
                      required
                    />
                  </p>
                  <p class="control">
                    <button className="button is-primary is-light is-right">
                      Party{" "}
                      <span role="img" aria-label="party_emoji">
                        🎉
                      </span>
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>

        <div
          className={
            "modal " +
            (this.state.invite_popup_shown === false &&
            this.state.is_host === true
              ? "is-active"
              : "")
          }
        >
          <div class="modal-background" onClick={this.closeModal}></div>
          <div class="modal-content">
            <div className="box">
              <form onSubmit={this.copyToClipboard}>
                <label>Share the link with friends to stream together</label>

                <div class="field is-grouped">
                  <p class="control is-expanded">
                    <input
                      class="input"
                      type="text"
                      value={window.location.href}
                      name="invite_link"
                      ref={copy_invite => (this.copy_invite = copy_invite)}
                    />
                  </p>
                  <p class="control">
                    <button className="button is-primary is-light is-right">
                      Copy to clipboard
                      <span role="img" aria-label="cliboard_emoji">
                        📋
                      </span>
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <button
            class="modal-close is-large"
            aria-label="close"
            onClick={this.closeModal}
          ></button>
        </div>

        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-8">
                <Player
                  youtube_video_id={this.state.youtube_video_id}
                  youtube_current_pos={this.state.youtube_current_pos}
                ></Player>
              </div>
              <div className="tile">
                <Chat
                  user_name={this.state.user_name}
                  chat_log={this.state.chat_log}
                  is_host={this.state.is_host}
                ></Chat>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Party;

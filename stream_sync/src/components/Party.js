import React from "react";
import "../css/App.css";
import Navbar from "./Navbar";
import Chat from "./Chat";
import { get_data } from "../utils/data_storage_utils";
import { createConnection, global_this_obj } from "../utils/webRTC_utils";

// https://stackoverflow.com/questions/54017100/how-to-integrate-youtube-iframe-api-in-reactjs-solution
class Party extends React.Component {
  state = {
    user_name: "",
    room_name: "",
    youtube_video_id: "",
    peer_id: "",
    is_host: false,
    chat_log: []
  };

  constructor(props) {
    super(props);
    window.global_this_obj = this;
    window.peer_ids = [];
    window.connections = [];
  }
  componentDidMount() {
    console.log("Component Mounted");
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
      createConnection(this, false, this.props.match.params.host_id);
    }
  }
  render() {
    if (this.state.user_name == "") {
    }
    console.log(window.connections);
    return (
      <div>
        <Navbar></Navbar>
        <div
          className={
            "modal   " + (this.state.user_name == "" ? "is-active" : "")
          }
        >
          <div class="modal-background"></div>
          <div class="modal-content">
            <div className="box">
              <p>You have been invited by: Nishit</p>
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter Your Username"
                  />
                </p>
                <p class="control">
                  <a class="button is-info">Party🎉</a>
                </p>
              </div>
            </div>
          </div>
          <button class="modal-close is-large" aria-label="close"></button>
        </div>
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-8">Player</div>
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

        <div id="player"></div>
      </div>
    );
  }
}
export default Party;

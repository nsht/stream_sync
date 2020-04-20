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
    var peer_id = this.props.match.params.host_id;
    this.setState({ peer_id });
    var data = get_data(this.props.match.params.host_id);

    if (data) {
      this.setState({
        user_name: data.user_name,
        youtube_video_id: data.youtube_video_id,
        room_name: data.room_name,
        is_host: data.is_host
      });
    }
  }
  render() {
    console.log(window.connections);
    return (
      <div>
        <Navbar></Navbar>
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-8">Player</div>
              <div className="tile">
                <Chat></Chat>
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

import React from "react";
import "../css/App.css";
import Navbar from "./Navbar";
import { get_data } from "../utils/data_storage_utils";
import { createHost, global_this_obj } from "../utils/webRTC_utils";

// https://stackoverflow.com/questions/54017100/how-to-integrate-youtube-iframe-api-in-reactjs-solution
class Party extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    window.global_this_obj = this;
    var data = get_data(this.props.match.params.host_id);
    if (data) {
      console.log("huh?");
      console.log(data);
    }
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Navbar></Navbar>
        <div id="player"></div>
      </div>
    );
  }
}
export default Party;

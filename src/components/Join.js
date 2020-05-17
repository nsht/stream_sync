import React from "react";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";

class Join extends React.Component {
  state = {
    RoomId: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ RoomId: e.target.RoomId.value });
  };
  render() {
    if (this.state.RoomId !== "") {
      return (
        <Redirect
          push
          to={{
            pathname: "party/" + this.state.RoomId,
            state: this.state
          }}
        ></Redirect>
      );
    }
    return (
      <>
        <Navbar></Navbar>

        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="card box">
                  <div className="card-content">
                    <form onSubmit={this.handleSubmit} className="room_name">
                      <div className="field">
                        <label className="label">RoomId</label>
                        <div className="control">
                          <input
                            className="input"
                            ref={this.roomNameRef}
                            placeholder="Type the room Id"
                            type="text"
                            name="RoomId"
                            required
                          ></input>
                        </div>
                      </div>
                      <div className="buttons is-right">
                        <button className={"button is-primary"}>
                          🥳 Party
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Join;

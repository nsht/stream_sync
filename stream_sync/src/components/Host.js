import React from "react";
import "../css/App.css";
import Navbar from "./Navbar";

class Host extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    if (this.roomNameRef.current.value === "") {
      return;
    }
    console.log(this.chatInputRef.current.value);
  };
  render() {
    return (
      <>
        <Navbar></Navbar>

        <section class="section">
          <div className="container">
            <div class="columns is-centered">
              <div class="column is-half">
              <div class="card">
  <div class="card-content">
                <form onSubmit={this.handleSubmit} className="room_name">
                  <div class="field">
                    <label class="label">RoomName</label>
                    <div class="control">
                      <input
                        class="input"
                        ref={this.roomNameRef}
                        placeholder="Type the name of your room"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                      <input
                        class="input"
                        ref={this.hostUserName}
                        placeholder="Please enter your username"
                        type="text"
                      ></input>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Youtube Link</label>
                    <div class="control">
                      <input
                        class="input"
                        ref={this.hostUserName}
                        placeholder="The Youtube link to be shared"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div class="buttons is-right">
                  <button class="button is-primary is-light is-right">Party🎉 </button>
                  </div>
                </form>
                </div></div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Host;

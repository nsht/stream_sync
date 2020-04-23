import React from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { send_chat } from "../utils/webRTC_utils";
import ChatBubble from "./ChatBubble";
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.chatBottom = React.createRef();
  }

  componentDidUpdate() {
    this.chatBottom.current.scrollIntoView({ behavior: "smooth" });
  }

  state = {
    showEmojis: false,
    message: ""
  };
  showEmojis = e => {
    this.setState({
      showEmojis: true
    });
  };
  closeMenu = () => {
    this.setState({
      showEmojis: false
    });
  };

  addEmoji = e => {
    let emoji = e.native;
    this.setState({
      message: this.state.message + emoji
    });
    this.closeMenu();
  };

  add_text = e => {
    this.setState({ message: e.target.value });
  };

  send_message = e => {
    e.preventDefault();
    if(this.state.message === ""){
      return;
    }
    send_chat(this.state.message, this.props.user_name, this.props.is_host);
    this.setState({ message: "" });
  };

  render() {
    return (
      <div className="box">
        <div className="box chat_box">
          {this.props.chat_log.map((chat_data, index) => {
            return <ChatBubble chat_data={chat_data}></ChatBubble>;
          })}
          <span ref={this.chatBottom} id="chat-bottom" />
        </div>
        <form onSubmit={this.send_message}>
          <div class="field is-grouped">
            <p className="">
              {this.state.showEmojis ? (
                <Picker
                  onSelect={this.addEmoji}
                  ref={el => (this.emojiPicker = el)}
                />
              ) : (
                <button class="button emoji-button">
                  <span class="icon is-small">
                    <p onClick={this.showEmojis} className="emoji">
                      {String.fromCodePoint(0x1f60a)}
                    </p>
                  </span>
                </button>
              )}
            </p>
            <p class="control is-expanded">
              <input
                class="input"
                value={this.state.message}
                type="text"
                placeholder="Chat.."
                onChange={this.add_text}
              />
            </p>
            <p class="control">
              <button class="button is-info" type="submit">
                Send
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Chat;

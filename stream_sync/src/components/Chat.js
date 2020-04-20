import React from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
class Chat extends React.Component {
  state = {
    showEmojis: false
  };
  showEmojis = e => {
    this.setState({
      showEmojis: true
    });
  };
  closeMenu = () => {
    console.log(this.emojiPicker);

    this.setState({
      showEmojis: false
    });
  };

  addEmoji = e => {
    // console.log(e.native);
    let emoji = e.native;
    this.setState({
      text: this.state.text + emoji
    });
    this.closeMenu();
  };

  render() {
    return (
      <div className="box">
        <div className="box chat_box">
          <div className="chat-bubble">
            <span className="chat_user_name"> Nishit:</span>
            This is some text
          </div>
          <div className="chat-bubble">
            <span className="chat_user_name"> Nishit:</span>
            This is some text
          </div>
        </div>
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
            <input class="input" type="text" placeholder="Chat.." />
          </p>
          <p class="control">
            <a class="button is-info">Chat</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Chat;

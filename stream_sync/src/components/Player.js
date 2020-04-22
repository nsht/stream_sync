import React from "react";

class Player extends React.Component {
  state = {
    player: ""
  };
  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded

    if (!window.YT) {
      // If not, load the script asynchronously
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      // If script is already there, load the video directly
      this.loadVideo();
    }
  };

  loadVideo = () => {
    // const { id } = this.props;

    // the Player object is created uniquely based on the id in props
    if (!this.props.youtube_video_id) {
      return;
    }
    this.state.player = new window.YT.Player(`youtube-player-iframe`, {
      videoId: this.props.youtube_video_id,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
        onPlaybackRateChange: this.onPlayerPlaybackRateChange
      }
    });
  };

  onPlayerReady = event => {
    event.target.playVideo();
  };
  onPlayerStateChange = event => {
    console.log(event);
  };
  onPlaybackRateChange = event => {
    console.log(event);
  };
  render() {
    if (!this.props.youtube_video_id) {
      return <div>Video not loaded</div>;
    }
    return (
      <div className="player_container">
        <div id={`youtube-player-iframe`} />
      </div>
    );
  }
}

export default Player;

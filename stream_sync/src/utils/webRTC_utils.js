export var global_this_obj = null;

export function createConnection(thisObj, is_host, host_id = null) {
  const Peer = window.Peer;
  var peer = new Peer({
    debug: 2,
    host: "116.203.130.35",
    port: 9000,
    path: "/myapp",
    iceTransportPolicy: "relay",

    config: {
      iceServers: [
        { url: "stun:stun.l.google.com:19302" },
        {
          url: "turn:51.15.213.116:3478",
          username: "nishit",
          credential: "test123"
        }
      ]
    }
  });
  window.peer_obj = peer;
  window.is_host = is_host;
  if (is_host !== true) {
    var conn = peer.connect(host_id);
    handle_connection(conn);
  }

  peer.on("open", function(id) {
    console.log("MY peer ID is " + peer.id);
    thisObj.setState({
      host_peer_id: peer.id
    });
  });

  //   Initializes connection
  peer.on("connection", function(conn) {
    console.log("connection called");
    handle_connection(conn);
  });
}

function handle_connection(conn) {
  window.peer_ids.push(conn.peer);

  conn.on("data", function(data) {
    console.log("data received");
    console.log(data);
    data_handler(data);
  });
  console.log("Handled connection");

  conn.on("close", function() {
    conn = null;
  });

  window.connections.push(conn);

  if (window.is_host === true) {
    setTimeout(function() {
      sync_video();
    }, 2500);
    broadcast_new_connection(conn.peer);
  }
}

function data_handler(data) {
  console.log("Data received: ")
  console.log(data);
  if (typeof data === "object" && data !== null) {
    if (data.data_type === "chat") {
      chat_handler(data);
    } else if (data.data_type === "new_connection") {
      connect_to_peer(data.peer_id);
    } else if (data.data_type === "youtube") {
      handle_youtube(data);
    }
  }
}

function send_data(data) {
  console.log("Sending data: ");
  console.log(data);
  var connections = window.connections;
  for (var i = 0; i < connections.length; i++) {
    connections[i].send(data);
  }
}

function broadcast_new_connection(peer_id) {
  var msg = { data_type: "new_connection", peer_id: peer_id };
  for (var i = 0; i < window.connections.length; i++) {
    if (window.connections[i].peer == peer_id) {
      continue;
    }
    window.connections[i].send(msg);
  }
}

function connect_to_peer(peer_id) {
  var conn = window.peer_obj.connect(peer_id);
  handle_connection(conn);
}

// Chat utils
function chat_handler(chat_data) {
  var chat_log = window.global_this_obj.state.chat_log;
  chat_data.message = decodeURIComponent(
    escape(window.atob(chat_data.message))
  );

  chat_log.push(chat_data);
  window.global_this_obj.setState({
    chat_log: chat_log
  });
}

export function send_chat(msg, user_name, is_host) {
  var msg_json = generate_chat_structure(msg, user_name, is_host);
  send_data(msg_json);
  chat_handler(msg_json);
}

function generate_chat_structure(msg, user_name, is_host) {
  var format = {
    data_type: "chat",
    user_name: user_name,
    user_type: is_host ? "Host" : "Client",
    message: btoa(unescape(encodeURIComponent(msg))),
    time_stamp: Date.now()
  };
  return format;
}

//  Youtube utils

function handle_youtube(data) {
  var state = window.global_this_obj.state;
  if (state.youtube_video_id == "") {
    window.global_this_obj.setState({
      youtube_video_id: data.videoId,
      youtube_current_pos: Math.ceil(data.startSeconds)
    });
  }

  else {
    window.global_this_obj.setState({isStateChangeFromBroadcastData : true});
    const player = window.yt_player;
    if (data.event == 2) {
      // isStateChangeFromBroadcastData = true;
      player.seekTo(data.startSeconds, true)
      player.pauseVideo();
    }
    else if (data.event == 1) {
      // isStateChangeFromBroadcastData = true;
      player.seekTo(Math.ceil(data.startSeconds), true)
      player.playVideo();
    }
    else if (data.event == 3) {
      // isStateChangeFromBroadcastData = true;
      player.seekTo(data.startSeconds, true)
      player.pauseVideo();
    }
    else if (data.event == "playbackRateChange") {
      player.seekTo(data.startSeconds, true)
      player.setPlaybackRate(data.playbackRate);
    }
  }
}

export function sync_video(event=null) {
  var payload_data = fetch_current_video_status(event);
  send_data(payload_data);
}

function fetch_current_video_status(event) {
  var yt_event;
  const player = window.yt_player;

  if (event != null) {
    yt_event = event;
  } else {
    yt_event = player.getPlayerState();
  }

  var videoId = player.getVideoData()["video_id"];
  var startSeconds = player.getCurrentTime();
  var playbackRate = player.getPlaybackRate();

  var payload = {
    data_type: "youtube",
    event: yt_event,
    videoId: videoId,
    startSeconds: startSeconds,
    playbackRate: playbackRate
  };

  return payload;
}
// {
//   "data_type": "chat|youtube|webrtc",
//   "user_name": "Nishit",
//   "user_type": "Host|Client",
//   "message": "Test",
//   "time_stamp": "ISO timestamp"
// }

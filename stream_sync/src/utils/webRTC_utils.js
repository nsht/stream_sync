export var global_this_obj = null;

export function createConnection(thisObj, is_host, host_id = null) {
  const Peer = window.Peer;
  console.log(thisObj);
  var lastPeerId = null;
  var peer_ids = [];
  var connections = [];
  if (is_host === true) {
    var peer = new Peer({ debug: 2 });
  } else {
    var peer = new Peer({ debug: 2 });

    var conn = peer.connect(host_id);
    handle_connection(conn);
  }
  // var peer = new Peer("test_nishit");
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

  function handle_connection(conn) {
    window.peer_ids.push(conn.peer);
    conn.on("data", function(data) {
      console.log(data);
      data_handler(data);
    });

    conn.on("close", function() {
      conn = null;
    });

    window.connections.push(conn);
    // broadcast_new_connection(conn.peer); TODO
  }
  return peer.id;
}

function data_handler(data) {
  console.log("IN data handler");
  console.log(data);
  if (typeof data === "object" && data !== null) {
    if (data.data_type == "chat") {
      chat_handler(data);
    }
  }
}

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
  console.log(msg_json);
  var connections = window.connections;
  for (var i = 0; i < connections.length; i++) {
    connections[i].send(msg_json);
  }
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

// {
//   "data_type": "chat|youtube|webrtc",
//   "user_name": "Nishit",
//   "user_type": "Host|Client",
//   "message": "Test",
//   "time_stamp": "ISO timestamp"
// }

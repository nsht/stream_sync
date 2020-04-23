export var global_this_obj = null;

export function createConnection(thisObj, is_host, host_id = null) {
  const Peer = window.Peer;
  var peer = new Peer({ debug: 2 });
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
  // TODO if host send youtube data here
  // setTimeout(function() {
  //   send_data(window.global_this_obj.state);
  // }, 500);
  if (window.is_host === true) {
    broadcast_new_connection(conn.peer);
  }
}
function data_handler(data) {
  console.log(data);
  if (typeof data === "object" && data !== null) {
    if (data.data_type === "chat") {
      chat_handler(data);
    } else if (data.data_type === "new_connection") {
      connect_to_peer(data.peer_id);
    }
  }
}

function send_data(data) {
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

// {
//   "data_type": "chat|youtube|webrtc",
//   "user_name": "Nishit",
//   "user_type": "Host|Client",
//   "message": "Test",
//   "time_stamp": "ISO timestamp"
// }

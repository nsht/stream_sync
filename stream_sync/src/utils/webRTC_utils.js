export var global_this_obj = null;


export function createConnection(thisObj) {
  const Peer = window.Peer;
  console.log(thisObj);
  var lastPeerId = null;
  var peer_ids = [];
  var connections = [];

  var peer = new Peer({ debug: 2 });
    // var peer = new Peer("test_nishit");
  peer.on("open", function(id) {
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
  if (typeof data === "object" && data !== null) {
    if (data.type == "chat") {
      chat_handler(data);
    }
  }
}

function chat_handler(chat_data) {
  var chat_log = window.global_this_obj.state.chat_log;
  chat_log.push(chat_data);
  window.global_this_obj.setState({
    chat_log: chat_log
  });
}

// {
//   "data_type": "chat|youtube|webrtc",
//   "user_name": "Nishit",
//   "user_type": "Host|Client",
//   "message": "Test",
//   "time_stamp": "ISO timestamp"
// }

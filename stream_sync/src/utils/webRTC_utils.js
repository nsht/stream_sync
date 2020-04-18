export var global_this_obj = null;
export function createHost(thisObj) {
  const Peer = window.Peer;
  console.log(thisObj);
  var lastPeerId = null;
  var peer_ids = [];
  var connections = [];

  var peer = new Peer({ debug: 2 });
//   var peer = new Peer("spwswf4jykh00000");
  peer.on("open", function(id) {
    thisObj.setState({
      host_peer_id: peer.id,
    });
  });

  //   Initializes connection
  peer.on("connection", function(conn) {
    console.log("connection called deus");
    handle_connection(conn);
  });

  function handle_connection(conn) {
    peer_ids.push(conn.peer);
    conn.on("data", function(data) {
      console.log(data);
      data_handler(data);
    });

    conn.on("close", function() {
      conn = null;
    });
    connections.push(conn);
    // broadcast_new_connection(conn.peer);
  }
  return peer.id;
}

function data_handler(data) {
    window.global_this_obj.setState({
    chat_data: data
  });
  //?How in the fuck will we pass data to react???
  // Sol1: move the functs to react and do this.set state?
  // Sol2: pass the this object like in create host
  // sol3:worst case scenario store in localstorage and poll that shit in react :nope:
  //redux/mobx ugh?
}

import React from "react";
import ChangeVideo from "./ChangeVideo";
class UserList extends React.Component {
  render() {
    var connected_users = this.props.connected_users;
    if (!connected_users) {
      connected_users = {};
    }

    var avatars = [];
    for (const key in connected_users) {
      var user = connected_users[key];
      avatars.push(
        <div
          key={key}
          className="avatar"
          title={user.user_name}
          style={{ backgroundColor: "#" + user.color_code }}
        >
          {user.user_name[0]}
        </div>
      );
    }
    return (
      <div className="info_box">
        <h4>Connected Users</h4>
        <div className="avatar_container">{avatars}</div>
      </div>
    );
  }
}

export default UserList;

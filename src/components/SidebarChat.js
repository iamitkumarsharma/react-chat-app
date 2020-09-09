import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarchat">
      <Avatar src="" />
      <div className="sidebarchat_info">
        <strong>Room Name</strong>
        <p>Last Message</p>
      </div>
    </div>
  );
}

export default SidebarChat;

import React, { useState } from "react";
import "./Chat.css";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoodIcon from "@material-ui/icons/Mood";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import SelectInput from "@material-ui/core/Select/SelectInput";
import axios from "../axios";

function Chat(props) {
  const [input, setInput] = useState("");

  const handleInput = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: "amit",
      timestamp: new Date().toUTCString(),
      received: false,
    });
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h4>Group name</h4>
          <p>Number</p>
        </div>
        <div className="chat_header_icon">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {props.messages.map((message) => (
          <p className={`chat_message ${message.received && "chat_receiver"}`}>
            <span
              className={`chat_name ${
                message.received && "chat_name_receiver"
              } `}
            >
              {message.name}
            </span>
            {message.message}
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <IconButton>
          <MoodIcon />
        </IconButton>

        <form className="chat_footer_input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button
            style={{ display: "none" }}
            onClick={handleInput}
            type="submit"
          ></button>
        </form>

        {input && (
          <IconButton>
            <SendIcon onClick={handleInput} className="chat_send_btn" />
          </IconButton>
        )}
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}
export default Chat;

import React, { useState } from "react";
import "./css/messageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PlaceIcon from "@material-ui/icons/Place";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function MessageSender({ popupHandle, handleAlert }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="messageSender">
      <div className="message__top">
        <Avatar src={user.photoURL} />

        <div className="post__text" onClick={popupHandle}>
          <p>What's on your mind ?</p>
        </div>
      </div>
      <div className="post__for__mobile" onClick={popupHandle}>
        <Avatar src={user.photoURL} />
        <p>What's on your mind?</p>
      </div>
      <div className="message__bottom">
        <div className="message__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live</h3>
        </div>
        <div className="message__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo</h3>
        </div>
        <div className="message__option">
          <PlaceIcon style={{ color: "rgb(250, 120, 142)" }} />
          <h3>Check in</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;

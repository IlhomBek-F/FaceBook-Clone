import React from "react";
import "./css/Post.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
function Post({ message, profileImg, userName, timestamp, image }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profileImg} className="post__avatar" />

        <div className="post__topInfo">
          <h3>{userName}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} />
      </div>

      <div className="post__option">
        <div className="post__opt">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__opt">
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__opt">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__opt">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;

import React from "react";
import { Avatar } from "@material-ui/core";
import "./css/Story.css";
import AddIcon from "@material-ui/icons/Add";

function Story({ image, profileSrc, title, mobileClass }) {
  return (
    <div
      className={mobileClass ? `story ${mobileClass}` : "story"}
      style={{ backgroundImage: `url(${image})` }}
    >
      {profileSrc ? (
        <Avatar className="story__avatar" src={profileSrc} />
      ) : (
        <div className="story__add">
          <AddIcon />
        </div>
      )}

      <h4>{title}</h4>
    </div>
  );
}

export default Story;

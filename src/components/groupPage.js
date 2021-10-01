import React from "react";
import GroupList from "./GroupList";
import GroupLeftSide from "./GroupLeftSide";
import "./css/group.css";
function Group({ motion }) {
  return (
    <div className="group__page">
      <GroupLeftSide motion={motion} />
      <GroupList motion={motion} />
    </div>
  );
}

export default Group;

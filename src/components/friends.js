import React from "react";
import LeftSide from "./LeftSide";
import FriendsList from "./FriendsList";

import "./css/friend.css";
function Friends({ motion }) {
  return (
    <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <LeftSide motion={motion} />
      <FriendsList motion={motion} />
    </motion.div>
  );
}

export default Friends;

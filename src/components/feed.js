import React, { useState, useEffect } from "react";
import "./css/feed.css";
import StoryRoot from "./StoryRoot";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
function Feed({
  responsiveForMobile,
  motion,
  popupHandle,
  setPopUp,
  handleALert,
}) {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <motion.div
      initial={responsiveForMobile ? { x: 390 } : { opacity: 0 }}
      animate={responsiveForMobile ? { x: 0 } : { opacity: 1 }}
      exit={responsiveForMobile ? { x: 100 } : { opacity: 0 }}
      transition={responsiveForMobile ? { delay: 0 } : ""}
      className="feed"
    >
      {responsiveForMobile ? (
        <>
          <MessageSender popupHandle={popupHandle} handleALert={handleALert} />
          <StoryRoot className="store" />
        </>
      ) : (
        <>
          <StoryRoot />
          <MessageSender
            popupHandle={popupHandle}
            setPopUp={setPopUp}
            handleALert={handleALert}
          />
        </>
      )}
      {posts.map((post) => (
        <Post
          key={post.id}
          profileImg={post.data.profilePic}
          timestamp={post.data.timestamp}
          userName={post.data.userName}
          image={post.data.image}
          message={post.data.message}
        />
      ))}
    </motion.div>
  );
}

export default Feed;

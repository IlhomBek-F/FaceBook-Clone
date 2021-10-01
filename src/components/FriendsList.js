import React, { useState, useEffect } from "react";
import "./css/friendList.css";
import List from "./list";
import db from "./firebase";

function FriendsList({ motion }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    db.collection("friend").onSnapshot((snapshot) =>
      setFriends(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fr__list"
    >
      <div className="container__card">
        <div className="may__know">
          <h2>You may know them</h2>
          <p>All</p>
        </div>
        <div className="list">
          {console.log(friends)}
          {friends.map((post) => (
            <List key={post.id} name={post.data.name} image={post.data.image} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default FriendsList;

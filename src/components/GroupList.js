import React, { useState, useEffect } from "react";
import "./css/groupList.css";
import SimpleSlider from "./SimpleSlider";
import db from "./firebase";

function GroupList({ motion }) {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    db.collection("group-collection-slider").onSnapshot((snapshot) =>
      setGroup(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group__list"
    >
      <div className="recommend__group">
        <div className="re__item">
          <h2>Recommendation For You</h2>
          <h4>Groups, you may like</h4>
        </div>
        <p>All</p>
      </div>
      {group.map((item) => (
        <SimpleSlider item={item} />
      ))}
    </motion.div>
  );
}

export default GroupList;

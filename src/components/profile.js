import React from "react";
import Header from "./header";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./css/profile.css";
import { useStateValue } from "./StateProvider";

import { Avatar, IconButton } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";

function Profile({ responsiveForMobile }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <motion.div
      initial={responsiveForMobile ? { x: 390 } : { opacity: 0 }}
      animate={responsiveForMobile ? { x: 0 } : { opacity: 1 }}
      exit={responsiveForMobile ? { x: 100 } : { opacity: 0 }}
      transition={responsiveForMobile ? { delay: 0 } : ""}
      className="profile"
    >
      <div className="profile__div">
        <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
      </div>
      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" />
        <h4>Friends</h4>
      </div>
      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/k0tRiO8UGxF.png" />
        <h4>Welcome</h4>
      </div>
      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" />
        <h4>Group</h4>
      </div>
      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" />
        <h4>Marketplace</h4>
      </div>
      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" />
        <h4>Watch</h4>
      </div>
      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" />
        <h4>Memory</h4>
      </div>
      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" />
        <h4>Saves</h4>
      </div>

      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" />
        <h4>Pages</h4>
      </div>
      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png" />
        <h4>Events</h4>
      </div>
      <div className="profile__div">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png" />
        <h4>News</h4>
      </div>
      <div className="profile__div">
        <ExpandMoreIcon />
        <h4>More</h4>
      </div>
    </motion.div>
  );
}

export default Profile;

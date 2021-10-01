import React from "react";
import "./css/groupLeft.css";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, IconButton } from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsIcon from "@material-ui/icons/Notifications";
function GroupLeftSide({ motion }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group__left"
    >
      <div className="left__container">
        <div className="friend__setting">
          <h2>Groups</h2>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
        <div className="group__input">
          <SearchIcon className="search" />
          <input placeholder="Search group" type="text" />
        </div>
        <div className="group__menu">
          <div className="menu__item">
            <div className="menu__icon">
              <ListAltIcon />
            </div>

            <h2>Your Tape</h2>
          </div>
          <div className="menu__item item__active">
            <div className="menu__icon menu__active">
              <ExploreIcon />
            </div>
            <h2>Interesting</h2>I
          </div>
          <div className="menu__item">
            <div className="menu__icon">
              <NotificationsIcon />
            </div>

            <h2>Your Notifications</h2>
          </div>
          <div className="group__btn">
            <button> + Create a new group</button>
          </div>
          <hr />
        </div>
      </div>
    </motion.div>
  );
}

export default GroupLeftSide;

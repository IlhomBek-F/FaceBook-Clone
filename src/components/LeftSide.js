import React from "react";
import "./css/leftside.css";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, IconButton } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
function LeftSide({ motion }) {
  return (
    <motion.div
    
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="friend__page"
      className="leftside"
    >
      <div className="left__container">
        <div className="friend__setting">
          <h2>Friends</h2>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="friend__menu ">
        <div className="friend__menu__item active__friend">
          <div className="item">
            <div className="main">
              <GroupIcon />
            </div>

            <h1>Home</h1>
          </div>
        </div>
        <div className="friend__menu__item">
          <div className="item">
            <div className="main">
              <PersonIcon />
            </div>

            <h1>Request for being friend</h1>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="friend__menu__item">
          <div className="item">
            <div className="main">
              <PersonAddIcon />
            </div>

            <h1>Recommendation</h1>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="friend__menu__item">
          <div className="item">
            <div className="main">
              <PersonIcon />
            </div>

            <h1>All Friends</h1>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="friend__menu__item">
          <div className="item">
            <div className="main">
              <CardGiftcardIcon />
            </div>

            <h1>Birth days</h1>
          </div>
        </div>
        <div className="friend__menu__item">
          <div className="item">
            <div className="main">
              <PersonIcon />
            </div>

            <h1>Main List</h1>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LeftSide;

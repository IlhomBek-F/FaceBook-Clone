import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/css/friend.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Widget from "./components/widget";
import Login from "./components/login";
import Profile from "./components/profile";
import Friends from "./components/friends";
import Group from "./components/groupPage";
import Popup from "./components/Popup";
import PopupForMobile from "./components/PopupForMobile";
import { AnimatePresence, motion } from "framer-motion";
import { useStateValue } from "./components/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// material UI install npm i @material-ui/core
// material UI icon npm i @material-ui/icons
// react-router npm install react-router-dom
function App() {
  const [{ user }, dispatch] = useStateValue();
  const [res, setRes] = useState(window.innerWidth);
  const [responsiveForMobile, setResponsiveForMobile] = useState(false);
  useEffect(() => {
    setRes(window.innerWidth);
    if (res > 300 && res < 415) {
      console.log("responsive for mobile");
      setResponsiveForMobile(true);
    } else {
      console.log("not responvive");
      setResponsiveForMobile(false);
    }
  }, [res]);
  const [popup, setPopUp] = useState(false);

  const popupHandle = () => {
    setPopUp(true);
    console.log("hello");
  };
  const handleALert = () => {
    console.log("hellllllllll");
  };
  return (
    <div className="App">
      <Router>
        <AnimatePresence>
          <Switch>
            <Route path="/profile">
              <div className="profile__app">
                <Header responsiveForMobile={responsiveForMobile} />
                <Profile responsiveForMobile={responsiveForMobile} />
              </div>
            </Route>
            <Route path="/friends">
              <div className="friends__app">
                <Header responsiveForMobile={responsiveForMobile} />
                <Friends motion={motion} />
              </div>
            </Route>
            <Route path="/group">
              <div className="group__app">
                <Header responsiveForMobile={responsiveForMobile} />
                <Group motion={motion} />
              </div>
            </Route>
            <Route path="/">
              {!user ? (
                <Login />
              ) : (
                <>
                  <Header
                    responsiveForMobile={responsiveForMobile}
                    popup={popup}
                  />

                  <div className="app__body">
                    <Sidebar
                      motion={motion}
                      responsiveForMobile={responsiveForMobile}
                    />
                    <Feed
                      responsiveForMobile={responsiveForMobile}
                      motion={motion}
                      popupHandle={popupHandle}
                      setPopUp={setPopUp}
                    />

                    <Widget motion={motion} />
                    {responsiveForMobile ? (
                      <PopupForMobile popup={popup} setPopUp={setPopUp} />
                    ) : (
                      <Popup
                        popup={popup}
                        setPopUp={setPopUp}
                        responsiveForMobile={responsiveForMobile}
                      />
                    )}
                  </div>
                </>
              )}
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useRef, useEffect } from "react";
import "./css/popup.css";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar, IconButton } from "@material-ui/core";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useStateValue } from "./StateProvider";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import PersonIcon from "@material-ui/icons/Person";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import RoomIcon from "@material-ui/icons/Room";
import FlagIcon from "@material-ui/icons/Flag";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import db from "./firebase";
import firebase from "firebase";
import { AnimatePresence, motion } from "framer-motion";

function Popup({ popup, setPopUp, responsiveForMobile }) {
  const [{ user }, dispatch] = useStateValue();

  const [photo, setPhoto] = useState(false);

  // UPLOAD IMAGE FUNTIONALITY

  const [loadImg, setLoadImg] = useState();
  const [value, setValue] = useState();
  const [preview, setPreview] = useState();
  const inputRef = useRef();
  const textArea = useRef();

  const handleInputRef = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (popup) {
      textArea.current.focus();
    }
  }, [popup, preview]);
  const handlePhoto = () => {
    setPhoto(true);
    textArea.current.focus();
  };

  const handleInput = (e) => {
    const selected = e.target.files[0];
    const imgType = ["image/png", "image/jpeg", "image/jpn"];
    if (selected && imgType.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setPreview(null);
    }
  };

  const handleImgPost = () => {
    setPhoto(false);
    setPreview(null);
    textArea.current.focus();
  };

  // DATA TO FIREBASE

  const handleSubmit = (e) => {
    e.preventDefault();

    // database functionality
    db.collection("posts").add({
      message: value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: preview,
    });

    setValue("");
    setPreview(null);
    setPopUp(false);
    setPhoto(false);
  };

  const handlePopupClose = () => {
    setPopUp(false);
    setValue("");
    setPreview(null);
    setPhoto(false);
  };
  return (
    <>
      <motion.div
        initial={{ x: 390 }}
        animate={{ x: 0 }}
        exit={{ x: 100 }}
        transition={{ delay: 0 }}
        className={popup ? "popup active__popup for__mobile" : "popup"}
      >
        <div className="popup__content">
          <div className="popup__info">
            <h1>Create Post</h1>
            <div className="close__icon" onClick={handlePopupClose}>
              <CloseIcon />
            </div>
          </div>
          <div className="popup__user">
            <div className="user__avatar">
              <Avatar src={user.photoURL} fontSize="large" />
            </div>
            <div className="user__name">
              <h1>{user.displayName}</h1>
              <div className="user__btn__friend">
                <PeopleAltOutlinedIcon />
                <span> friends</span>
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>

          <div className="popup__form">
            <textarea
              value={value}
              ref={textArea}
              onChange={(e) => setValue(e.target.value)}
              className={photo ? "short__area" : "textarea"}
              placeholder="What news do you have...?"
            ></textarea>

            <div className={photo ? "upload__img show" : "upload__img"}>
              <div className="img__close" onClick={handleImgPost}>
                <CloseIcon />
              </div>
              <div onClick={handleInputRef} className="img__post">
                {preview ? <img src={preview} /> : ""}

                <input
                  onChange={handleInput}
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />

                <div className={preview ? "none" : "add__photo__title"}>
                  <AddPhotoAlternateIcon className="add__img" />
                  <h1>Add Photo</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="add__more">
            <div className="add__title">
              <h1>Add also</h1>
            </div>
            <div className="add__photo">
              <AddPhotoAlternateIcon
                className="add__photo add"
                onClick={handlePhoto}
              />
              <PersonIcon className="add__person add" />
              <EmojiEmotionsOutlinedIcon className="add__emoji add" />
              <RoomIcon className="add__room add" />
              <FlagIcon className="add__flag add" />
              <MoreHorizIcon className="add__more__icon add" />
            </div>
          </div>
          <button
            disabled={preview || value ? "" : "disabled"}
            className="publish__btn"
            onClick={handleSubmit}
          >
            Publish
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default Popup;

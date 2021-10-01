import React, { useState, useRef } from "react";
import "./css/popupForMobile.css";
import { Avatar, IconButton } from "@material-ui/core";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import RoomIcon from "@material-ui/icons/Room";
import CloseIcon from "@material-ui/icons/Close";

import PersonIcon from "@material-ui/icons/Person";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import { MoreHorizOutlined } from "@material-ui/icons";
function PopupForMobile({ popup, setPopUp }) {
  const [cansel, setCancel] = useState(false);

  const [{ user }, dispatch] = useStateValue();
  const [photo, setPhoto] = useState(false);
  const [preview, setPreview] = useState("");
  const [textIn, setTextIn] = useState("");
  const handleRef = useRef();
  const handleCancel = () => {
    setCancel(true);
  };

  const handleClose = () => {
    setPopUp(false);
    setCancel(false);
  };

  const handleGoBack = () => {
    setCancel(false);
  };

  const handleInput = () => {
    handleRef.current.click();
  };

  const handleInputFile = (e) => {
    const selected = e.target.files[0];
    const imgType = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && imgType.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setPreview(null);
    }

    console.log(preview);
  };

  const handleDelPhoto = () => {
    setPreview(null);
  };

  // Send data to DataBase

  const sendToData = () => {
    db.collection("posts").add({
      message: textIn,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: preview,
    });

    setPopUp(false);
    setCancel(false);
  };
  return (
    <div className={popup ? "popup__res" : "popup__none"}>
      <div className="pop">
        <div
          className={cansel ? "header__popup none__header" : "header__popup"}
        >
          <button onClick={handleCancel}>Cancel</button>
          <p>Create Post</p>
          <button onClick={sendToData}>Post</button>
        </div>
        <div className="post__user">
          <div className="post__user__img">
            <Avatar src={user.photoURL} />
          </div>
          <div className="post__user__info">
            <h2>{user.displayName}</h2>
            <div className="post__user__btn">
              <div className="post__btn">
                <PeopleAltOutlinedIcon />
                <h5>friends</h5>
                <ArrowDropDownIcon />
              </div>
              <div className="post__btn">
                <AddIcon />
                <h5>Album</h5>
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="form__post">
          <textarea
            className={preview ? "photo__area" : "post__textarea"}
            value={textIn}
            onChange={(e) => setTextIn(e.target.value)}
            placeholder={
              preview
                ? "Say something about this photo..."
                : "What's on your mind?"
            }
          ></textarea>
        </div>
        {preview ? (
          <div className="post__photo">
            <img src={preview} />
            <CloseIcon
              className="post__photo__close"
              onClick={handleDelPhoto}
            />
          </div>
        ) : (
          ""
        )}

        <div className="add__to__your__post">
          <div className="add__post__title">
            <p>Add to your post</p>
          </div>
          <div className="add__post__icon">
            <div className="up__photo" onClick={handleInput}>
              <input
                onChange={handleInputFile}
                type="file"
                style={{ display: "none" }}
                ref={handleRef}
              />
              <AddPhotoAlternateIcon className="post__add add__photo" />
            </div>

            <PersonIcon className="post__add add__person" />
            <EmojiEmotionsOutlinedIcon className="post__add add__emoji" />
            <RoomIcon className="post__add add__room" />
          </div>
        </div>
      </div>
      <div className={cansel ? " active__post" : "cancel__post"}>
        <div className={cansel ? "cancel__item active__item" : "cancel__item"}>
          <div className="cancel__button">
            <button onClick={handleClose}>Discard Post</button>
          </div>
          <div className="go__back">
            <button onClick={handleGoBack}>Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupForMobile;

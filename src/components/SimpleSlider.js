import React, { useState, useEffect } from "react";
import "./css/slide.css";
function SimpleSlider({ item }) {
  return (
    <div className="group__card">
      <div className="card__image__group">
        <img src={item.data.groupImage} />
      </div>
      <div className="card__info__group">
        <h1>{item.data.groupName}</h1>
        <p>{item.data.groupSubscriber}K subscriber</p>
        <button>Join</button>
      </div>
    </div>
  );
}

export default SimpleSlider;

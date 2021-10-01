import React, { useState } from "react";
import "./css/list.css";

function List({ name, image }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} />
      </div>
      <div className="card__info">
        <h2>{name}</h2>
        <div className="card__btn">
          <button className="add__btn">Add</button>
          <button className="delete__btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default List;

/*import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item, onCardClick }) => {
  const handleClick = () => {
    if (!item._id) {
      console.error("Item is missing _id", item);
      return;
    }
    onCardClick(item);
  };

  return (
    <li className="item-card">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="item-card__image"
        onClick={handleClick}
      />
      <h3 className="item-card__name">{item.name}</h3>
      <p className="item-card__weather">Weather: {item.weather}</p>
    </li>
  );
};

export default ItemCard;*/

import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { _id, name, likes } = item;
  const currentUser = useContext(CurrentUserContext);

  const isLiked = likes.some((id) => id === currentUser._id);

  const itemLikeButtonClassName = isLiked
    ? "item-card__like-button_active"
    : "item-card__like-button";

  const handleLike = () => {
    onCardLike({ id: _id, isLiked });
  };

  return (
    <li className="item-card">
      <button onClick={() => onCardClick(item)}>View</button>
      <div>{name}</div>
      {currentUser && (
        <button className={itemLikeButtonClassName} onClick={handleLike}>
          {isLiked ? "Unlike" : "Like"}
        </button>
      )}
    </li>
  );
}

export default ItemCard;

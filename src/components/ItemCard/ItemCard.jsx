import React from "react";
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

export default ItemCard;

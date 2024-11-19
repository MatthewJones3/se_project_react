/*import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;*/

import React from "react";

function ItemCard({ item }) {
  return (
    <li className="item-card">
      <img src={item.imageUrl} alt={item.name} className="item-card__image" />
      <h3 className="item-card__name">{item.name}</h3>
      <p className="item-card__weather">Weather: {item.weather}</p>
    </li>
  );
}

export default ItemCard;

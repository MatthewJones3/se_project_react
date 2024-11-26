

import React from "react";

function ItemCard({ item, onCardClick }) {
  const handleClick = () => {
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
}

export default ItemCard;

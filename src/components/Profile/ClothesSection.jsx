import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ items, onAddItemClick, onCardClick }) {
  return (
    <section className="clothes-section">
      <h2 className="clothes-section__title">Your Items</h2>
      <button
        onClick={onAddItemClick}
        className="clothes-section__add-item-btn"
      >
        + Add new
      </button>
      <ul className="clothes-section__list">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;

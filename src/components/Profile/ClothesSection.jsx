/*import React from "react";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ items, onAddItemClick }) {
  return (
    <section className="clothes-section">
      <button
        onClick={onAddItemClick}
        className="clothes-section__add-item-btn"
      >
        + Add new
      </button>
      <ul className="clothes-section__list">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;*/

// ClothesSection.jsx
import React from "react";
import ItemCard from "../ItemCard/ItemCard";

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

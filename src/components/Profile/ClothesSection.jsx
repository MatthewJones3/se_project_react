/*import React from "react";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ items, onAddItemClick }) {
  return (
    <section className="clothes-section">
      <button
        onClick={onAddItemClick}
        className="clothes-section__add-item-btn"
      >
        + Add Item
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

import React from "react";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ items, onAddItemClick }) {
  return (
    <section className="clothes-section">
      <button
        onClick={onAddItemClick}
        className="clothes-section__add-item-btn"
      >
        + Add Item
      </button>
      <ul className="clothes-section__list">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;

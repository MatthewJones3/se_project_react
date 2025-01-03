import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import AddItemModal from "../ModalWithForm/AddItemModal";
import "./ClothesSection.css";

function ClothesSection({ items, onCardClick, handleAddClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddItem = (newItem) => {
    console.log("Adding new item:", newItem);
  };

  return (
    <section className="clothes-section">
      <h2 className="clothes-section__title">Your Items /</h2>
      <button onClick={handleAddClick} className="header__add-clothes-btn">
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

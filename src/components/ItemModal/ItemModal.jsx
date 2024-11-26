

import React from "react";

function ItemModal({ item, isOpen, onCloseModal, onDeleteItem }) {
  if (!isOpen) return null;

  const handleDelete = () => {
    onDeleteItem(item.id);
    onCloseModal();
  };

  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <span className="modal__close" onClick={onCloseModal}>
          &times;
        </span>
        <h2>{item.name}</h2>
        <img src={item.imageUrl} alt={item.name} className="modal__image" />
        <p>Weather: {item.weather}</p>
        <button className="modal__delete-button" onClick={handleDelete}>
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;



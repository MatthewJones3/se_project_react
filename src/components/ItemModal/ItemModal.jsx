import React from "react";
import "./ItemModal.css";

function ItemModal({ item, isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete(item);
    onClose();
  };

  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>
        <h2>{item?.name}</h2>
        <img src={item?.imageUrl} alt={item?.name} className="modal__image" />
        <p>Weather: {item?.weather}</p>
        <button className="modal__delete-button" onClick={handleDelete}>
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;

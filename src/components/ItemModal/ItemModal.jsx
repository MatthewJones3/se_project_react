import React from "react";
import "./ItemModal.css";
import { deleteItem } from "../../utils/weatherApi";

function ItemModal({ item, isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  const handleDelete = () => {
    if (!item || !item._id) {
      console.error("Item is missing _id", item);
      return;
    }

    onDelete(item);
    /*onClose();*/
  };

  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>
        <h2 className="modal__title">{item?.name}</h2>
        <img src={item?.imageUrl} alt={item?.name} className="modal__image" />
        <div className="modal__body">
          <p className="modal__weather">Weather: {item?.weather}</p>
          <button className="modal__delete-button" onClick={handleDelete}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

import React, { useContext } from "react";
import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ item, isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  const currentUser = useContext(CurrentUserContext);
  const isOwn = item.owner === currentUser?._id;

  const handleDelete = () => {
    if (!item || !item._id) {
      console.error("Item is missing _id", item);
      return;
    }

    onDelete(item);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>
        <img src={item?.imageUrl} alt={item?.name} className="modal__image" />
        <div className="modal__body">
          <h2 className="modal__title">{item?.name}</h2>
          <p className="modal__weather">Weather: {item?.weather}</p>
          {isOwn && (
            <button className="modal__delete-button" onClick={handleDelete}>
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

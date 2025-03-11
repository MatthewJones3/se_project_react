import React, { useState } from "react";
import { editUserProfile } from "../../utils/auth";
import "./ChangeProfileModal.css";
import closeIcon2 from "../../images/close-icon2.png";

function ChangeProfileModal({ isOpen, onClose, currentUser }) {
  const [name, setName] = useState(currentUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUserData = { name, avatar };
      await editUserProfile(updatedUserData);
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content-change">
        <h2 className="modal__title-sidebar">Change Profile Data</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeIcon2}
            alt="Close"
            className="modal__close-icon-sidebar"
          />
        </button>
        <form onSubmit={handleSubmit} className="modal__form">
          <div className="modal__input-group">
            <label htmlFor="name" className="modal__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="modal__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="modal__input-group">
            <label htmlFor="avatar" className="modal__label">
              Avatar URL
            </label>
            <input
              type="text"
              id="avatar"
              className="modal__input"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="modal__submit modal__submit-change">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangeProfileModal;

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function ChangeProfileModal({ isOpen, onClose, currentUser, onChangeProfile }) {
  const [name, setName] = useState(currentUser?.name || "");
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onChangeProfile({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save Changes"
    >
      <div className="modal__input-group">
        <label className="modal__label">Name</label>
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
        <label className="modal__label">Avatar URL</label>
        <input
          type="text"
          id="avatar"
          className="modal__input"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </div>
    </ModalWithForm>
  );
}

export default ChangeProfileModal;

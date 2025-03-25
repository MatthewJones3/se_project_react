/*import React, { useState, useEffect } from "react";
import "./EditProfileModal.css";

function EditProfileModal({ isOpen, onClose, currentUser, onEditProfile }) {
  const [name, setName] = useState(currentUser?.name || "");
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatar || "");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAvatarUrl(currentUser.avatar);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = { name, avatar: avatarUrl };
    onEditProfile(updatedUserData);
  };

  if (!isOpen) return null;

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-modal__content">
        <span className="edit-profile-modal__close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="edit-profile-modal__field">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="edit-profile-modal__field">
            <label>Avatar URL:</label>
            <input
              type="text"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;*/

import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditProfileModal({ isOpen, onClose, currentUser, onEditProfile }) {
  const [name, setName] = useState(currentUser?.name || "");
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.avatar || "");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAvatarUrl(currentUser.avatar);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = { name, avatar: avatarUrl };
    onEditProfile(updatedUserData);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Profile"
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <div className="modal__field">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="modal__field">
        <label>Avatar URL:</label>
        <input
          type="text"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
      </div>
    </ModalWithForm>
  );
}

export default EditProfileModal;

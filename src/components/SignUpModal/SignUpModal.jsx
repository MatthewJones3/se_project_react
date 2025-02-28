import React, { useState } from "react";
import "./SignUpModal.css";
import closeIcon2 from "../../images/close-icon2.png";

function SignUpModal({ onSignUp, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ email, password, name, avatar: avatarUrl });
  };

  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <h2 className="modal__title-garment">Sign Up</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeIcon2}
            alt="Close"
            className="modal__close-icon-garment"
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
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="modal__input-group">
            <label htmlFor="email" className="modal__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="modal__input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="modal__input-group">
            <label htmlFor="password" className="modal__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="modal__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="modal__input-group">
            <label htmlFor="avatarUrl" className="modal__label">
              Avatar URL
            </label>
            <input
              type="url"
              id="avatarUrl"
              className="modal__input"
              placeholder="Avatar URL"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              required
            />
          </div>
          <div className="modal__buttons">
            <button type="submit" className="modal__submit-sign-up">
              Next
            </button>
            <p>or</p>
            <button
              type="button"
              onClick={() => onClose()}
              className="modal__login-link"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;

import React, { useState } from "react";
import "./LoginModal.css";
import closeIcon2 from "../../images/close-icon2.png";

function LoginModal({ onLogin, onClose, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <h2 className="modal__title-login">Log in</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeIcon2}
            alt="Close"
            className="modal__close-icon-garment"
          />
        </button>
        <form onSubmit={handleSubmit} className="modal__form">
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

          <button type="submit" className="modal__submit-login">
            Log in
          </button>
          <button
            type="button"
            onClick={onRegister}
            className="modal__register-link"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;

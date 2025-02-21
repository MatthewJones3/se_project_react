import React, { useState } from "react";
import "./SignUpModal.css";

function SignUpModal({ onSignUp, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ email, password, name, avatarUrl });
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button onClick={onClose} className="modal__close-btn">
          X
        </button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Avatar URL"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            required
          />
          <div className="modal__buttons">
            <button type="submit">Next</button>
            <p>or</p>
            <button type="button" onClick={() => onClose()}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;



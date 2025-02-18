/*import { useState } from "react";

function LoginModal({ onLogin, onClose }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
}

export default LoginModal;*/
//////////////////////

import { useState } from "react";

function LoginModal({ onLogin, onClose, onRegister }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          <img
            src="/path/to/close-icon.svg"
            alt="Close"
            className="modal__close-icon"
          />
        </button>
        <h2 className="modal__title">Sign In</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label" htmlFor="email">
            Email
          </label>
          <input
            className="modal__input_name"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label className="modal__label" htmlFor="password">
            Password
          </label>
          <input
            className="modal__input_name"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </form>
        <div className="modal__footer">
          <button
            className="modal__submit"
            type="submit"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <span className="modal__or">or</span>
          <button className="modal__submit" onClick={onRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
////////////



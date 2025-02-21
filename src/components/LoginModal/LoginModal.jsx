/*import { useState } from "react";

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
        <button type="submit">Log In</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
        <button type="button" onClick={onRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default LoginModal;*/
////////
import React, { useState } from "react";
import "./LoginModal.css";

function LoginModal({ onLogin, onClose, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button onClick={onClose} className="modal__close-btn">
          X
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="button" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <button onClick={onRegister} className="modal__register-link">
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
///////

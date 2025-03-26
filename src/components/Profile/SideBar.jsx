import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../images/avatar.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./SideBar.css";
import ChangeProfileModal from "../Profile/ChangeProfileModal";

function SideBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleChangeProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    navigate("/");
    window.location.reload();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img
          src={currentUser?.avatar || avatar}
          alt="User Avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <button
        onClick={handleChangeProfileClick}
        className="sidebar__change-profile-btn"
      >
        Change Profile Data
      </button>
      <button onClick={handleLogOut} className="sidebar__logout-btn">
        Log out
      </button>

      {isModalOpen && (
        <ChangeProfileModal
          isOpen={isModalOpen}
          onClose={closeModal}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}

export default SideBar;

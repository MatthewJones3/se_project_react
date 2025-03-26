import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./Profile.css";

function Profile({ clothingItems, onCardClick, handleAddClick }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleAddItemClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onCardLike = (itemId) => {
    
  };

  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        items={clothingItems}
        onAddItemClick={handleAddItemClick}
        onCardClick={onCardClick}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;

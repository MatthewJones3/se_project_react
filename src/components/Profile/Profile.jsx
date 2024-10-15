// src/components/Profile/Profile.jsx
import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ModalWithForm from "../ModalWithForm/ModalWithForm"; // Import your AddItemModal here
import { defaultClothingItems } from "../../utils/constants"; // Import clothing items

function Profile() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleAddItemClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        items={defaultClothingItems}
        onAddItemClick={handleAddItemClick}
      />
      <ModalWithForm
        title="Add Item"
        buttonText="Add"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        {}
      </ModalWithForm>
    </div>
  );
}

export default Profile;

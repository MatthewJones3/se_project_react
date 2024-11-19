/*import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { defaultClothingItems } from "../../utils/constants";

function Profile({ clothingItems }) {
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
        items={clothingItems}
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

export default Profile;*/

import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function Profile({ clothingItems }) {
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
        items={clothingItems}
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

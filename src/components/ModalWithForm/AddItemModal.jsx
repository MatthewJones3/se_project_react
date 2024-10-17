import React, { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);
  const handleWeatherChange = (e) => setWeather(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
    onCloseModal();
  };

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={handleImageUrlChange}
      />
      <input
        type="text"
        placeholder="Weather Type"
        value={weather}
        onChange={handleWeatherChange}
      />
      <button type="submit">Add Item</button>
    </ModalWithForm>
  );
};

export default AddItemModal;

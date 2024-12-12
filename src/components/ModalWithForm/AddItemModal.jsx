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
        className="modal__input_name"
        placeholder="Item Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        className="modal__input_URL"
        placeholder="Image URL"
        value={imageUrl}
        onChange={handleImageUrlChange}
      />
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select Weather Type</legend>
        <label className="modal__label">
          <input
            type="radio"
            name="weather"
            value="hot"
            checked={weather === "hot"}
            onChange={handleWeatherChange}
          />
          Hot
        </label>
        <label className="modal__label">
          <input
            type="radio"
            name="weather"
            value="warm"
            checked={weather === "warm"}
            onChange={handleWeatherChange}
          />
          Warm
        </label>
        <label className="modal__label">
          <input
            type="radio"
            name="weather"
            value="cold"
            checked={weather === "cold"}
            onChange={handleWeatherChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;

import React, { useContext, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ClothesSection.css";

function ClothesSection({
  items,
  onCardLike,
  handleAddClick,
  onItemDelete,
  onItemAdd,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = items.filter((item) => item.owner === currentUser?._id);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="clothes-section">
      <h2 className="clothes-section__title">Your Items /</h2>
      <button onClick={handleAddClick} className="header__add-clothes-btn">
        + Add new
      </button>
      <ul className="clothes-section__list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleItemClick}
              onCardLike={onCardLike}
            />
          ))
        ) : (
          <p>No items to display</p>
        )}
      </ul>
      <ItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={onItemDelete}
      />
    </section>
  );
}

export default ClothesSection;

/////////

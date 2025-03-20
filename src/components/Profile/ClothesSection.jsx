import React, { useContext, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { deleteItem, addItem } from "../../utils/api";
import "./ClothesSection.css";

function ClothesSection({ items, onCardLike, handleAddClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsList, setItemsList] = useState(items);

  const filteredItems = itemsList.filter(
    (item) => item.owner === currentUser?._id
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (item) => {
    deleteItem(item._id)
      .then(() => {
        setItemsList(itemsList.filter((i) => i._id !== item._id));
        closeModal();
      })
      .catch((err) => {
        console.error("Error deleting item:", err);
      });
  };

  const handleAddNewItem = (newItem) => {
    addItem(newItem)
      .then((addedItem) => {
        setItemsList([...itemsList, addedItem]);
      })
      .catch((err) => {
        console.error("Error adding item:", err);
      });
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
        onDelete={handleDelete}
      />
    </section>
  );
}

export default ClothesSection;
///////

import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import likeBtnImage from "../../images/like-btn.png";
import likeBtnActiveImage from "../../images/like-btn-active.png";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const { _id, name, imageUrl, likes } = item;
  const currentUser = useContext(CurrentUserContext);

  const [isLiked, setIsLiked] = useState(
    likes.some((id) => id === currentUser?._id)
  );

  useEffect(() => {
    setIsLiked(likes.some((id) => id === currentUser?._id));
  }, [likes, currentUser]);

  const itemLikeButtonClassName = isLiked
    ? "item-card__like-button_active"
    : "item-card__like-button";

  const handleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    onCardLike({ id: item._id, isLiked: !isLiked });
  };

  const handleImageClick = () => {
    onCardClick(item);
  };

  return (
    <li className="item-card">
      <img
        src={imageUrl}
        alt={name}
        className="item-card__image"
        onClick={handleImageClick}
      />
      <div className="item-card__name">{name}</div>
      {currentUser && (
        <button
          className="item-card__like-button"
          onClick={handleLike}
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          <img
            src={isLiked ? likeBtnActiveImage : likeBtnImage}
            alt={isLiked ? "Unlike" : "Like"}
            className="item-card__like-image"
          />
        </button>
      )}
    </li>
  );
}

export default ItemCard;

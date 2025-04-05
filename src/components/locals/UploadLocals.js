import React from 'react';
import { AiOutlineInfoCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './LocalsCard.css';

const LocalsCard = ({ local, onClick, onInfoClick, selected, onLoveToggle, isLoved }) => {
  return (
    <div className={`card-horizontal ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className="card-image">
        <img src={local.image} alt={local.name} />
      </div>
      <div className="card-info">
        <h3>{local.name}</h3>
        <p className="description">{local.shortDescription}</p>
        <p className="address">{local.address}</p>
        <div className="meta">
          <span className="rating">⭐ {local.rating}</span>
          <span className="icons">
            <AiOutlineInfoCircle
              className="icon"
              onClick={(e) => {
                e.stopPropagation();
                onInfoClick();
              }}
              title="More Info"
            />
            {isLoved ? (
              <AiFillHeart
                className="icon loved"
                title="Unfavorite"
                onClick={(e) => {
                  e.stopPropagation();
                  onLoveToggle(local.id);
                }}
              />
            ) : (
              <AiOutlineHeart
                className="icon"
                title="Favorite"
                onClick={(e) => {
                  e.stopPropagation();
                  onLoveToggle(local.id);
                }}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocalsCard;

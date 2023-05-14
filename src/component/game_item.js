import React from 'react';
import '../styles/game_item.css'

const GameItem = (props) => {
  return (
    <a href='#' className="game-item">
      <img src={props.imageSrc} alt={props.title} className="game-item__image" />
      <h3 className="game-item__title">{props.title}</h3>
      <p className="game-item__price">Ціна {props.price}₴</p>
      <p className='release_date'>Дата виходу {props.release_date}</p>
      <button href='#' className="game-item__button">Додати до кошика</button>
    </a>
  );
};

export default GameItem;
import React from 'react';
import '../styles/game_page.css'

const GamePage = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="game_card">
        <video className="game_video" src={props.video} controls></video>
        <div className="info_block">
          <img width="380" height="180" src={props.img} alt="Зображення гри" />
          <p>{props.short_description}</p>
        </div>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default GamePage;
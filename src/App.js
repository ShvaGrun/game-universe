import React, { Component } from "react"
import { useState } from "react";
import Login from "./component/Login";
import Header from "./component/Header";
import UserPage from "./component/userPage";
import Header_auth from "./component/Header_auth";
import GameItem from "./component/game_item";
import GameList from "./component/game_list";
import PasswordField from "./component/test"
import GamePage from "./component/game_page";

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const [games, setGames] = useState([
    {id: 1, title: 'Age of Wonders 4', price: '650', release_date: '24.01.2023', imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1669000/hero_capsule.jpg?t=1683635102"},
    {id: 2, title: 'Age of Wonders 5', price: '650', release_date: '24.01.2023', imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1669000/hero_capsule.jpg?t=1683635102"},
    {id: 3, title: 'Age of Wonders 6', price: '650', release_date: '24.01.2023', imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1669000/hero_capsule.jpg?t=1683635102"},
    {id: 4, title: 'Age of Wonders 7', price: '650', release_date: '24.01.2023', imageSrc: "https://cdn.akamai.steamstatic.com/steam/apps/1669000/hero_capsule.jpg?t=1683635102"},
  ])

  const [test, setTest] = useState([
    {title: "Counter-Strike: Global Offensive", img: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1683566799", video: "https://cdn.akamai.steamstatic.com/steam/apps/2028288/movie480.webm?t=1554409287", short_description: "Counter-Strike: Global Offensive (CS:GO) продовжує розвивати командний бойовий ігролад, що зробив серію успішною багато років тому. CS:GO пропонує нові мапи, персонажів, зброю, ігрові режими, а також оновлені версії класичного вмісту (de_dust2 тощо).", description: "Даґ Ломбарді з Valve сказав: «Гра Counter-Strike захопила ігрову індустрію зненацька. Мод, який мав мало шансів на успіх, став найпопулярнішою грою-бойовиком для ПК майже одразу після виходу в серпні 1999-го. Протягом наступних 12 років CS продовжувала очолювати список ігор із найбільшою кількістю гравців, у неї грали на найбільших змагальних турнірах, і вона продалася накладом у 25 мільйонів копій (уся франшиза). CS:GO обіцяє розширити відзначені нагородами ігрові механіки й надати можливість грати не лише на ПК, але й на сучасних ігрових консолях і комп’ютерах на операційній системі Mac»."}
  ])

  const handleOpenPopupClick = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopupClick = () => {
    setIsOpenPopup(false);
  };

  return (
    <div className="App">
      {/* ПОЧАТКОВА СТОРІНКА
        <Header handleLoginPopupClick={handleOpenPopupClick}/>
        <Login handleClosePopupClick={handleClosePopupClick} isOpenPopup={isOpenPopup} /> 
      */}

      {/* АВТОРИЗОВАНИЙ КОРИСТУВАЧ
        <Header_auth />
      */}
      {/* <GameList games = {games}/>  */}
      <div>
        {test.map(test =>
          <GamePage title={test.title} img={test.img} video={test.video} short_description={test.short_description} description={test.description}/>
        )}
      </div>
      
    </div>
  );
}

export default App;

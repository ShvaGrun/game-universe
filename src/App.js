import React, { Component } from "react"
import { useState } from "react";
import Login from "./Login";
import Header from "./Header";

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleOpenPopupClick = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopupClick = () => {
    setIsOpenPopup(false);
  };

  return (
    <div className="App">
      <h1>{isOpenPopup}</h1>
      <Header handleLoginPopupClick={handleOpenPopupClick} />
      <Login handleOpenPopupClick = {handleOpenPopupClick} handleClosePopupClick={handleClosePopupClick} isOpenPopup={isOpenPopup} />
    </div>
  );
}

export default App;

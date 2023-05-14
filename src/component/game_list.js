import React from 'react'
import GameItem from './game_item'
import '../styles/game_list.css'

function GameList({games}) {
  return (
    <div className='game_list'>
        {games.map(game =>
          <GameItem title={game.title} price={game.price} release_date={game.release_date} imageSrc={game.imageSrc} key={game.id}/>
        )}
    </div>
  )
}

export default GameList
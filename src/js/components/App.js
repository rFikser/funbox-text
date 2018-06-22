import React from 'react';
import {render} from 'react-dom';
import Card from './Card'
import cards from '../cards.json';

function App() {
  return (
    <div className="cards">
      {cards.map((card) =>
        <div key={card.id} className="cards__container">
          <Card card={card}/>
        </div>
      )}
    </div>
  )
}

export default App

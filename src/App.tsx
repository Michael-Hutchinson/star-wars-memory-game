/* eslint-disable no-unused-vars */
import { Wrapper } from 'App.styles';
import React, { useState } from 'react';
import { createBoard, ICardProps } from 'utils/setup';
import { shuffleArray } from 'utils/utils';

const App = () => {
  const [cards, setCards] = useState<ICardProps[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchPairs, setMatchPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | ICardProps>(undefined);
  return (
    <Wrapper>
      {cards.map((card) => (
        <p key={card.id}>Card.id</p>
      ))}
    </Wrapper>
  );
};

export default App;
